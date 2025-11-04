"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketPriorityModule = void 0;
const common_1 = require("@nestjs/common");
const ticket_priority_service_1 = require("./ticket-priority.service");
const ticket_priority_controller_1 = require("./ticket-priority.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_priority_entity_1 = require("./entities/ticket-priority.entity");
let TicketPriorityModule = class TicketPriorityModule {
};
exports.TicketPriorityModule = TicketPriorityModule;
exports.TicketPriorityModule = TicketPriorityModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ticket_priority_entity_1.TicketPriority])],
        controllers: [ticket_priority_controller_1.TicketPriorityController],
        providers: [ticket_priority_service_1.TicketPriorityService],
        exports: [ticket_priority_service_1.TicketPriorityService],
    })
], TicketPriorityModule);
//# sourceMappingURL=ticket-priority.module.js.map