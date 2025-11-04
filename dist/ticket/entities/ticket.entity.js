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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ticket = void 0;
const department_entity_1 = require("../../department/entities/department.entity");
const ticket_assignment_entity_1 = require("../../ticket-assignment/entities/ticket-assignment.entity");
const ticket_category_entity_1 = require("../../ticket-category/entities/ticket-category.entity");
const ticket_priority_entity_1 = require("../../ticket-priority/entities/ticket-priority.entity");
const ticket_status_entity_1 = require("../../ticket-status/entities/ticket-status.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const typeorm_1 = require("typeorm");
let Ticket = class Ticket {
    ticket_id;
    ticket_number;
    description;
    requester;
    department;
    category;
    priority;
    status;
    manager;
    manager_approved_at;
    manager_comment;
    created_at;
    updated_at;
    closed_at;
    cancelled_at;
    resolution_summary;
    assignments;
};
exports.Ticket = Ticket;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Ticket.prototype, "ticket_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 40 }),
    __metadata("design:type", String)
], Ticket.prototype, "ticket_number", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.ticket_requests, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'requester_id' }),
    __metadata("design:type", user_entity_1.User)
], Ticket.prototype, "requester", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.tickets, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], Ticket.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ticket_category_entity_1.TicketCategory, (category) => category.tickets, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'category_id' }),
    __metadata("design:type", ticket_category_entity_1.TicketCategory)
], Ticket.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ticket_priority_entity_1.TicketPriority, (priority) => priority.tickets, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'priority_id' }),
    __metadata("design:type", ticket_priority_entity_1.TicketPriority)
], Ticket.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => ticket_status_entity_1.TicketStatus, (status) => status.tickets, { nullable: false }),
    (0, typeorm_1.JoinColumn)({ name: 'status_id' }),
    __metadata("design:type", ticket_status_entity_1.TicketStatus)
], Ticket.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.managed_tickets, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'manager_id' }),
    __metadata("design:type", user_entity_1.User)
], Ticket.prototype, "manager", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Ticket.prototype, "manager_approved_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "manager_comment", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Ticket.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Ticket.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Ticket.prototype, "closed_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', nullable: true }),
    __metadata("design:type", Date)
], Ticket.prototype, "cancelled_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Ticket.prototype, "resolution_summary", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_assignment_entity_1.TicketAssignment, (assignment) => assignment.ticket),
    __metadata("design:type", Array)
], Ticket.prototype, "assignments", void 0);
exports.Ticket = Ticket = __decorate([
    (0, typeorm_1.Entity)({ name: 'tickets' })
], Ticket);
//# sourceMappingURL=ticket.entity.js.map