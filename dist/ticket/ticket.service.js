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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_entity_1 = require("./entities/ticket.entity");
const user_entity_1 = require("../user/entities/user.entity");
const department_entity_1 = require("../department/entities/department.entity");
const ticket_category_entity_1 = require("../ticket-category/entities/ticket-category.entity");
const ticket_priority_entity_1 = require("../ticket-priority/entities/ticket-priority.entity");
const ticket_status_entity_1 = require("../ticket-status/entities/ticket-status.entity");
let TicketService = class TicketService {
    ticketRepository;
    userRepository;
    departmentRepository;
    categoryRepository;
    priorityRepository;
    statusRepository;
    dataSource;
    constructor(ticketRepository, userRepository, departmentRepository, categoryRepository, priorityRepository, statusRepository, dataSource) {
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
        this.departmentRepository = departmentRepository;
        this.categoryRepository = categoryRepository;
        this.priorityRepository = priorityRepository;
        this.statusRepository = statusRepository;
        this.dataSource = dataSource;
    }
    async create(createDto) {
        const requester = await this.userRepository.findOne({ where: { user_id: createDto.requester_id } });
        if (!requester)
            throw new common_1.NotFoundException(`Requester ${createDto.requester_id} not found`);
        const ticket_number = await this.generateTicketNumber();
        const ticket = this.ticketRepository.create({
            ticket_number,
            description: createDto.description,
            requester,
        });
        if (createDto.department_id) {
            const department = await this.departmentRepository.findOne({ where: { department_id: createDto.department_id } });
            if (!department)
                throw new common_1.NotFoundException(`Department ${createDto.department_id} not found`);
            ticket.department = department;
        }
        if (createDto.category_id) {
            const category = await this.categoryRepository.findOne({ where: { category_id: createDto.category_id } });
            if (!category)
                throw new common_1.NotFoundException(`Category ${createDto.category_id} not found`);
            ticket.category = category;
        }
        const priority = await this.priorityRepository.findOne({ where: { priority_id: createDto.priority_id } });
        if (!priority)
            throw new common_1.NotFoundException(`Priority ${createDto.priority_id} not found`);
        ticket.priority = priority;
        const status = await this.statusRepository.findOne({ where: { status_id: createDto.status_id } });
        if (!status)
            throw new common_1.NotFoundException(`Status ${createDto.status_id} not found`);
        ticket.status = status;
        if (createDto.manager_id) {
            const manager = await this.userRepository.findOne({ where: { user_id: createDto.manager_id } });
            if (!manager)
                throw new common_1.NotFoundException(`Manager ${createDto.manager_id} not found`);
            ticket.manager = manager;
        }
        if (createDto.manager_comment)
            ticket.manager_comment = createDto.manager_comment;
        return this.ticketRepository.save(ticket);
    }
    async findAll() {
        return this.ticketRepository.find({
            relations: ['requester', 'department', 'category', 'priority', 'status', 'manager', 'assignments'],
        });
    }
    async findOne(id) {
        const ticket = await this.ticketRepository.findOne({
            where: { ticket_id: id },
            relations: ['requester', 'department', 'category', 'priority', 'status', 'manager', 'assignments'],
        });
        if (!ticket)
            throw new common_1.NotFoundException(`Ticket ${id} not found`);
        return ticket;
    }
    async update(id, updateTicketDto) {
        const ticket = await this.findOne(id);
        if (updateTicketDto.ticket_number !== undefined)
            ticket.ticket_number = updateTicketDto.ticket_number;
        if (updateTicketDto.description !== undefined)
            ticket.description = updateTicketDto.description;
        if (updateTicketDto.requester_id) {
            const requester = await this.userRepository.findOne({ where: { user_id: updateTicketDto.requester_id } });
            if (!requester)
                throw new common_1.NotFoundException(`Requester ${updateTicketDto.requester_id} not found`);
            ticket.requester = requester;
        }
        if (updateTicketDto.department_id) {
            const department = await this.departmentRepository.findOne({ where: { department_id: updateTicketDto.department_id } });
            if (!department)
                throw new common_1.NotFoundException(`Department ${updateTicketDto.department_id} not found`);
            ticket.department = department;
        }
        if (updateTicketDto.category_id) {
            const category = await this.categoryRepository.findOne({ where: { category_id: updateTicketDto.category_id } });
            if (!category)
                throw new common_1.NotFoundException(`Category ${updateTicketDto.category_id} not found`);
            ticket.category = category;
        }
        if (updateTicketDto.priority_id) {
            const priority = await this.priorityRepository.findOne({ where: { priority_id: updateTicketDto.priority_id } });
            if (!priority)
                throw new common_1.NotFoundException(`Priority ${updateTicketDto.priority_id} not found`);
            ticket.priority = priority;
        }
        if (updateTicketDto.status_id) {
            const status = await this.statusRepository.findOne({ where: { status_id: updateTicketDto.status_id } });
            if (!status)
                throw new common_1.NotFoundException(`Status ${updateTicketDto.status_id} not found`);
            ticket.status = status;
        }
        if (updateTicketDto.manager_id) {
            const manager = await this.userRepository.findOne({ where: { user_id: updateTicketDto.manager_id } });
            if (!manager)
                throw new common_1.NotFoundException(`Manager ${updateTicketDto.manager_id} not found`);
            ticket.manager = manager;
        }
        if (updateTicketDto.manager_comment !== undefined)
            ticket.manager_comment = updateTicketDto.manager_comment;
        if (updateTicketDto.closed_at !== undefined)
            ticket.closed_at = updateTicketDto.closed_at;
        if (updateTicketDto.cancelled_at !== undefined)
            ticket.cancelled_at = updateTicketDto.cancelled_at;
        if (updateTicketDto.resolution_summary !== undefined)
            ticket.resolution_summary = updateTicketDto.resolution_summary;
        return this.ticketRepository.save(ticket);
    }
    async remove(id) {
        const ticket = await this.findOne(id);
        return this.ticketRepository.remove(ticket);
    }
    async generateTicketNumber() {
        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();
        try {
            const lastTicket = await queryRunner.manager
                .getRepository(ticket_entity_1.Ticket)
                .createQueryBuilder('ticket')
                .setLock('pessimistic_write')
                .orderBy('ticket.created_at', 'DESC')
                .limit(1)
                .getOne();
            let nextNumber = 1;
            if (lastTicket && lastTicket.ticket_number) {
                const lastNum = parseInt(lastTicket.ticket_number.replace('T-INC-', ''), 10);
                if (!isNaN(lastNum))
                    nextNumber = lastNum + 1;
            }
            const ticketNumber = `T-INC-${nextNumber.toString().padStart(4, '0')}`;
            await queryRunner.commitTransaction();
            return ticketNumber;
        }
        catch (error) {
            await queryRunner.rollbackTransaction();
            throw error;
        }
        finally {
            await queryRunner.release();
        }
    }
    async findByRequester(requester_id) {
        const requester = await this.userRepository.findOne({ where: { user_id: requester_id } });
        if (!requester)
            throw new common_1.NotFoundException(`Requester ${requester_id} not found`);
        return this.ticketRepository.find({
            where: { requester: { user_id: requester_id } },
            relations: ['requester', 'department', 'category', 'priority', 'status', 'manager', 'assignments'],
        });
    }
    async findByDepartment(department_id) {
        const department = await this.departmentRepository.findOne({ where: { department_id } });
        if (!department)
            throw new common_1.NotFoundException(`Department ${department_id} not found`);
        return this.ticketRepository.find({
            where: { department: { department_id } },
            relations: ['requester', 'department', 'category', 'priority', 'status', 'manager', 'assignments'],
        });
    }
    async findByDepartmentAndStatus(department_id, status_id) {
        const department = await this.departmentRepository.findOne({ where: { department_id } });
        if (!department)
            throw new common_1.NotFoundException(`Department ${department_id} not found`);
        const status = await this.statusRepository.findOne({ where: { status_id } });
        if (!status)
            throw new common_1.NotFoundException(`Status ${status_id} not found`);
        return this.ticketRepository.find({
            where: {
                department: { department_id },
                status: { status_id },
            },
            relations: ['requester', 'department', 'category', 'priority', 'status', 'manager', 'assignments'],
        });
    }
    async findByStatus(status_id) {
        const status = await this.statusRepository.findOne({ where: { status_id } });
        if (!status)
            throw new common_1.NotFoundException(`Status ${status_id} not found`);
        return this.ticketRepository.find({
            where: { status: { status_id } },
            relations: ['requester', 'department', 'category', 'priority', 'status', 'manager', 'assignments'],
        });
    }
    async countAll() {
        return this.ticketRepository.count();
    }
    async countByStatus(status_id) {
        const status = await this.statusRepository.findOne({ where: { status_id } });
        if (!status)
            throw new common_1.NotFoundException(`Status ${status_id} not found`);
        return this.ticketRepository.count({ where: { status: { status_id } } });
    }
    async countByDepartmentAndStatus(department_id, statusName) {
        return this.ticketRepository
            .createQueryBuilder('ticket')
            .leftJoin('ticket.department', 'department')
            .leftJoin('ticket.status', 'status')
            .where('department.department_id = :departmentId', { departmentId: department_id })
            .andWhere('LOWER(status.status_name) = LOWER(:statusName)', { statusName })
            .getCount();
    }
};
exports.TicketService = TicketService;
exports.TicketService = TicketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(2, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __param(3, (0, typeorm_1.InjectRepository)(ticket_category_entity_1.TicketCategory)),
    __param(4, (0, typeorm_1.InjectRepository)(ticket_priority_entity_1.TicketPriority)),
    __param(5, (0, typeorm_1.InjectRepository)(ticket_status_entity_1.TicketStatus)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.DataSource])
], TicketService);
//# sourceMappingURL=ticket.service.js.map