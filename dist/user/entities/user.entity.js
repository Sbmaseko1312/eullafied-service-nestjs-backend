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
exports.User = void 0;
const department_entity_1 = require("../../department/entities/department.entity");
const role_entity_1 = require("../../role/entities/role.entity");
const staff_performance_entity_1 = require("../../staff-performance/entities/staff-performance.entity");
const ticket_assignment_entity_1 = require("../../ticket-assignment/entities/ticket-assignment.entity");
const ticket_entity_1 = require("../../ticket/entities/ticket.entity");
const typeorm_1 = require("typeorm");
let User = class User {
    user_id;
    name;
    surname;
    password;
    email;
    role;
    department;
    assigned_at;
    updated_at;
    ticket_requests;
    managed_tickets;
    assigned_tickets;
    staff_performance_counters;
};
exports.User = User;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], User.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "surname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => role_entity_1.Role, (role) => role.users, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'role_id' }),
    __metadata("design:type", role_entity_1.Role)
], User.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entity_1.Department, (department) => department.users, { eager: true }),
    (0, typeorm_1.JoinColumn)({ name: 'department_id' }),
    __metadata("design:type", department_entity_1.Department)
], User.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "assigned_at", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], User.prototype, "updated_at", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.requester),
    __metadata("design:type", Array)
], User.prototype, "ticket_requests", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.manager),
    __metadata("design:type", Array)
], User.prototype, "managed_tickets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_assignment_entity_1.TicketAssignment, (assignment) => assignment.assigned_to),
    __metadata("design:type", Array)
], User.prototype, "assigned_tickets", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => staff_performance_entity_1.StaffPerformanceCounter, (counter) => counter.user),
    __metadata("design:type", Array)
], User.prototype, "staff_performance_counters", void 0);
exports.User = User = __decorate([
    (0, typeorm_1.Entity)()
], User);
//# sourceMappingURL=user.entity.js.map