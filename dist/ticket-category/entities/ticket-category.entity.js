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
exports.TicketCategory = void 0;
const ticket_entity_1 = require("../../ticket/entities/ticket.entity");
const typeorm_1 = require("typeorm");
let TicketCategory = class TicketCategory {
    category_id;
    name;
    tickets;
};
exports.TicketCategory = TicketCategory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], TicketCategory.prototype, "category_id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, length: 100 }),
    __metadata("design:type", String)
], TicketCategory.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => ticket_entity_1.Ticket, (ticket) => ticket.category),
    __metadata("design:type", Array)
], TicketCategory.prototype, "tickets", void 0);
exports.TicketCategory = TicketCategory = __decorate([
    (0, typeorm_1.Entity)()
], TicketCategory);
//# sourceMappingURL=ticket-category.entity.js.map