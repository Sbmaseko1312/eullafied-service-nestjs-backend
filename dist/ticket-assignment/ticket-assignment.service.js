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
exports.TicketAssignmentService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const ticket_assignment_entity_1 = require("./entities/ticket-assignment.entity");
const user_entity_1 = require("../user/entities/user.entity");
const ticket_entity_1 = require("../ticket/entities/ticket.entity");
let TicketAssignmentService = class TicketAssignmentService {
    assignmentRepository;
    ticketRepository;
    userRepository;
    constructor(assignmentRepository, ticketRepository, userRepository) {
        this.assignmentRepository = assignmentRepository;
        this.ticketRepository = ticketRepository;
        this.userRepository = userRepository;
    }
    async create(createDto) {
        const ticket = await this.ticketRepository.findOne({
            where: { ticket_id: createDto.ticket_id },
        });
        if (!ticket)
            throw new common_1.NotFoundException(`Ticket ${createDto.ticket_id} not found`);
        const assigned_to = await this.userRepository.findOne({
            where: { user_id: createDto.assigned_to },
        });
        if (!assigned_to)
            throw new common_1.NotFoundException(`User ${createDto.assigned_to} not found`);
        const assignment = this.assignmentRepository.create({
            ticket,
            assigned_to,
            assignment_reason: createDto.assignment_reason,
        });
        return this.assignmentRepository.save(assignment);
    }
    async findAll() {
        return this.assignmentRepository.find({
            relations: {
                assigned_to: true,
                ticket: true,
            },
        });
    }
    async findOne(id) {
        const assignment = await this.assignmentRepository.findOne({
            where: { assignment_id: id },
            relations: {
                assigned_to: true,
                ticket: true,
            },
        });
        if (!assignment)
            throw new common_1.NotFoundException(`Assignment ${id} not found`);
        return assignment;
    }
    async update(id, updateDto) {
        const assignment = await this.assignmentRepository.findOne({ where: { assignment_id: id } });
        if (!assignment)
            throw new common_1.NotFoundException(`Assignment ${id} not found`);
        if (updateDto.ticket_id) {
            const ticket = await this.ticketRepository.findOne({
                where: { ticket_id: updateDto.ticket_id },
            });
            if (!ticket)
                throw new common_1.NotFoundException(`Ticket ${updateDto.ticket_id} not found`);
            assignment.ticket = ticket;
        }
        if (updateDto.assigned_to) {
            const user = await this.userRepository.findOne({
                where: { user_id: updateDto.assigned_to },
            });
            if (!user)
                throw new common_1.NotFoundException(`User ${updateDto.assigned_to} not found`);
            assignment.assigned_to = user;
        }
        if (updateDto.assignment_reason !== undefined) {
            assignment.assignment_reason = updateDto.assignment_reason;
        }
        return this.assignmentRepository.save(assignment);
    }
    async remove(id) {
        const assignment = await this.assignmentRepository.findOne({ where: { assignment_id: id } });
        if (!assignment)
            throw new common_1.NotFoundException(`Assignment ${id} not found`);
        assignment.unassigned_at = new Date();
        return this.assignmentRepository.save(assignment);
    }
    async findByUserId(user_id) {
        const user = await this.userRepository.findOne({ where: { user_id } });
        if (!user)
            throw new common_1.NotFoundException(`User ${user_id} not found`);
        return this.assignmentRepository.find({
            where: { assigned_to: { user_id } },
            relations: {
                assigned_to: true,
                ticket: {
                    requester: true,
                    department: true,
                    category: true,
                    priority: true,
                    status: true,
                    manager: true,
                    assignments: true,
                },
            },
        });
    }
    async unassignTicket(assignment_id, message) {
        const assignment = await this.assignmentRepository.findOne({
            where: { assignment_id },
            relations: {
                assigned_to: true,
                ticket: true,
            },
        });
        if (!assignment)
            throw new common_1.NotFoundException(`Assignment ${assignment_id} not found`);
        assignment.unassigned_at = new Date();
        assignment.assignment_reason = message;
        return this.assignmentRepository.save(assignment);
    }
};
exports.TicketAssignmentService = TicketAssignmentService;
exports.TicketAssignmentService = TicketAssignmentService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(ticket_assignment_entity_1.TicketAssignment)),
    __param(1, (0, typeorm_1.InjectRepository)(ticket_entity_1.Ticket)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TicketAssignmentService);
//# sourceMappingURL=ticket-assignment.service.js.map