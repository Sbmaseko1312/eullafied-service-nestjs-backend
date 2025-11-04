"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketModule = void 0;
const common_1 = require("@nestjs/common");
const ticket_service_1 = require("./ticket.service");
const ticket_controller_1 = require("./ticket.controller");
const typeorm_1 = require("@nestjs/typeorm");
const department_entity_1 = require("../department/entities/department.entity");
const ticket_category_entity_1 = require("../ticket-category/entities/ticket-category.entity");
const ticket_priority_entity_1 = require("../ticket-priority/entities/ticket-priority.entity");
const ticket_status_entity_1 = require("../ticket-status/entities/ticket-status.entity");
const user_entity_1 = require("../user/entities/user.entity");
const ticket_entity_1 = require("./entities/ticket.entity");
let TicketModule = class TicketModule {
};
exports.TicketModule = TicketModule;
exports.TicketModule = TicketModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                ticket_entity_1.Ticket,
                user_entity_1.User,
                department_entity_1.Department,
                ticket_category_entity_1.TicketCategory,
                ticket_priority_entity_1.TicketPriority,
                ticket_status_entity_1.TicketStatus,
            ]),
        ],
        providers: [ticket_service_1.TicketService],
        controllers: [ticket_controller_1.TicketController],
        exports: [ticket_service_1.TicketService],
    })
], TicketModule);
//# sourceMappingURL=ticket.module.js.map