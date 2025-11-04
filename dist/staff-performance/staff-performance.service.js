"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var StaffPerformanceService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffPerformanceService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const staff_performance_entity_1 = require("./entities/staff-performance.entity");
const schedule_1 = require("@nestjs/schedule");
const ticket_entity_1 = require("../ticket/entities/ticket.entity");
const ticket_assignment_entity_1 = require("../ticket-assignment/entities/ticket-assignment.entity");
let StaffPerformanceService = StaffPerformanceService_1 = class StaffPerformanceService {
    performanceRepo;
    ticketRepo;
    assignmentRepo;
    logger = new common_1.Logger(StaffPerformanceService_1.name);
    constructor(performanceRepo, ticketRepo, assignmentRepo) {
        this.performanceRepo = performanceRepo;
        this.ticketRepo = ticketRepo;
        this.assignmentRepo = assignmentRepo;
    }
    async updatePerformanceMetrics() {
        this.logger.debug('Running performance metrics update...');
        try {
            const today = this.getToday();
            const startOfWeek = this.getStartOfWeek(today);
            const activeStaff = await this.getActiveStaffMembers();
            for (const userId of activeStaff) {
                await this.updateStaffMetrics(userId, startOfWeek);
            }
            this.logger.debug('Performance metrics update completed');
        }
        catch (error) {
            this.logger.error('Error updating performance metrics', error.stack);
        }
    }
    async updateStaffMetrics(userId, metricDate) {
        try {
            const resolvedTickets = await this.getResolvedTicketsForWeek(userId, metricDate);
            if (resolvedTickets.length === 0) {
                await this.ensurePerformanceRecord(userId, metricDate, 0, null);
                return;
            }
            const ticketsResolved = resolvedTickets.length;
            const avgResolutionSeconds = this.calculateAverageResolution(resolvedTickets);
            await this.upsertPerformanceRecord(userId, metricDate, ticketsResolved, avgResolutionSeconds);
        }
        catch (error) {
            this.logger.error(`Error updating metrics for user ${userId}`, error.stack);
        }
    }
    async getActiveStaffMembers() {
        const startOfWeek = this.getStartOfWeek(this.getToday());
        const assignments = await this.assignmentRepo
            .createQueryBuilder('assignment')
            .select('DISTINCT assignment.assigned_to', 'user_id')
            .where('assignment.assigned_at >= :startOfWeek', { startOfWeek })
            .getRawMany();
        return assignments.map(a => a.user_id);
    }
    async getResolvedTicketsForWeek(userId, startOfWeek) {
        const endOfWeek = this.getEndOfWeek(startOfWeek);
        return await this.ticketRepo
            .createQueryBuilder('ticket')
            .innerJoin('ticket.assignments', 'assignment')
            .innerJoin('ticket.status', 'status')
            .where('assignment.assigned_to = :userId', { userId })
            .andWhere('status.status_name IN (:...resolvedStatuses)', {
            resolvedStatuses: ['Resolved', 'Closed', 'Completed'],
        })
            .andWhere('ticket.closed_at BETWEEN :startOfWeek AND :endOfWeek', {
            startOfWeek,
            endOfWeek,
        })
            .getMany();
    }
    calculateAverageResolution(tickets) {
        if (tickets.length === 0)
            return null;
        const totalSeconds = tickets.reduce((sum, ticket) => {
            if (!ticket.created_at || !ticket.closed_at)
                return sum;
            const resolutionTime = ticket.closed_at.getTime() - ticket.created_at.getTime();
            return sum + Math.floor(resolutionTime / 1000);
        }, 0);
        return Math.floor(totalSeconds / tickets.length);
    }
    async upsertPerformanceRecord(userId, metricDate, ticketsResolved, avgResolutionSeconds) {
        const existing = await this.performanceRepo.findOne({
            where: {
                user_id: userId,
                metric_date: metricDate,
            },
        });
        if (existing) {
            existing.tickets_resolved = ticketsResolved;
            existing.avg_resolution_seconds = avgResolutionSeconds ?? null;
            await this.performanceRepo.save(existing);
            this.logger.debug(`Updated metrics for user ${userId}: ${ticketsResolved} tickets, avg ${avgResolutionSeconds}s`);
        }
        else {
            const newRecord = new staff_performance_entity_1.StaffPerformanceCounter();
            newRecord.user_id = userId;
            newRecord.metric_date = metricDate;
            newRecord.tickets_resolved = ticketsResolved;
            newRecord.avg_resolution_seconds = avgResolutionSeconds ?? null;
            await this.performanceRepo.save(newRecord);
            this.logger.debug(`Created metrics for user ${userId}: ${ticketsResolved} tickets, avg ${avgResolutionSeconds}s`);
        }
    }
    async ensurePerformanceRecord(userId, metricDate, ticketsResolved, avgResolutionSeconds) {
        const existing = await this.performanceRepo.findOne({
            where: {
                user_id: userId,
                metric_date: metricDate,
            },
        });
        if (!existing) {
            const newRecord = new staff_performance_entity_1.StaffPerformanceCounter();
            newRecord.user_id = userId;
            newRecord.metric_date = metricDate;
            newRecord.tickets_resolved = ticketsResolved;
            newRecord.avg_resolution_seconds = avgResolutionSeconds ?? null;
            await this.performanceRepo.save(newRecord);
        }
    }
    getToday() {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return today;
    }
    getStartOfWeek(date) {
        const d = new Date(date);
        const day = d.getDay();
        const diff = d.getDate() - day + (day === 0 ? -6 : 1);
        d.setDate(diff);
        d.setHours(0, 0, 0, 0);
        return d;
    }
    getEndOfWeek(startOfWeek) {
        const d = new Date(startOfWeek);
        d.setDate(d.getDate() + 6);
        d.setHours(23, 59, 59, 999);
        return d;
    }
    async create(createDto) {
        const newRecord = new staff_performance_entity_1.StaffPerformanceCounter();
        newRecord.user_id = createDto.user_id;
        newRecord.metric_date = new Date(createDto.metric_date);
        newRecord.tickets_resolved = createDto.tickets_resolved || 0;
        newRecord.avg_resolution_seconds = createDto.avg_resolution_seconds ?? undefined;
        return await this.performanceRepo.save(newRecord);
    }
    async update(userId, metricDate, updateDto) {
        const date = new Date(metricDate);
        const record = await this.performanceRepo.findOne({
            where: {
                user_id: userId,
                metric_date: date,
            },
        });
        if (!record) {
            throw new Error('Performance record not found');
        }
        if (updateDto.tickets_resolved !== undefined) {
            record.tickets_resolved = updateDto.tickets_resolved;
        }
        if (updateDto.avg_resolution_seconds !== undefined) {
            record.avg_resolution_seconds = updateDto.avg_resolution_seconds ?? undefined;
        }
        return await this.performanceRepo.save(record);
    }
    async remove(userId, metricDate) {
        const date = new Date(metricDate);
        const record = await this.performanceRepo.findOne({
            where: {
                user_id: userId,
                metric_date: date,
            },
        });
        if (!record) {
            throw new Error('Performance record not found');
        }
        await this.performanceRepo.remove(record);
        return record;
    }
    async findByUser(userId) {
        return await this.performanceRepo.find({
            where: { user_id: userId },
            order: { metric_date: 'DESC' },
        });
    }
    async getCurrentWeekPerformance(userId) {
        const startOfWeek = this.getStartOfWeek(this.getToday());
        return await this.performanceRepo.findOne({
            where: {
                user_id: userId,
                metric_date: startOfWeek,
            },
        });
    }
    async findByUserAndDateRange(userId, startDate, endDate) {
        return await this.performanceRepo.find({
            where: {
                user_id: userId,
                metric_date: (0, typeorm_2.Between)(startDate, endDate),
            },
            order: { metric_date: 'ASC' },
        });
    }
    async getTopPerformers(limit = 10) {
        const startOfWeek = this.getStartOfWeek(this.getToday());
        return await this.performanceRepo.find({
            where: { metric_date: startOfWeek },
            order: {
                tickets_resolved: 'DESC',
                avg_resolution_seconds: 'ASC',
            },
            take: limit,
            relations: ['user'],
        });
    }
    async findAll() {
        return await this.performanceRepo.find({
            order: { metric_date: 'DESC' },
            relations: ['user'],
        });
    }
    async findOne(userId, metricDate) {
        const date = new Date(metricDate);
        const record = await this.performanceRepo.findOne({
            where: {
                user_id: userId,
                metric_date: date,
            },
            relations: ['user'],
        });
        if (!record) {
            throw new common_1.NotFoundException(`Performance record for user ${userId} on ${metricDate} not found`);
        }
        return record;
    }
    async recalculateCurrentWeek() {
        this.logger.log('Manual recalculation triggered for current week');
        await this.updatePerformanceMetrics();
    }
};
exports.StaffPerformanceService = StaffPerformanceService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_MINUTE),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StaffPerformanceService.prototype, "updatePerformanceMetrics", null);
exports.StaffPerformanceService = StaffPerformanceService = StaffPerformanceService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(staff_performance_entity_1.StaffPerformanceCounter)),
    __param(1, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __param(2, (0, typeorm_1.InjectRepository)(ticket_assignment_entity_1.TicketAssignment)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], StaffPerformanceService);
//# sourceMappingURL=staff-performance.service.js.map