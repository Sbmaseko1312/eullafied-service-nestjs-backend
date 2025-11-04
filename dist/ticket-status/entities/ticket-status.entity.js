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
exports.TicketStatus = void 0;
const ticket_entity_1 = require("../../ticket/entities/ticket.entity");
const typeorm_1 = require("typeorm");
let TicketStatus = class TicketStatus {
    status_id;
    status_name;
    tickets;
};
exports.TicketStatus = TicketStatus;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TicketStatus.prototype, "status_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 50 }),
    __metadata("design:type", String)
], TicketStatus.prototype, "status_name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.status),
    __metadata("design:type", Array)
], TicketStatus.prototype, "tickets", void 0);
exports.TicketStatus = TicketStatus = __decorate([
    (0, typeorm_1.Entity)()
], TicketStatus);
//# sourceMappingURL=ticket-status.entity.js.map