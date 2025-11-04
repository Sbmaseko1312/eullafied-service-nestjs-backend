"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketStatusModule = void 0;
const common_1 = require("@nestjs/common");
const ticket_status_service_1 = require("./ticket-status.service");
const ticket_status_controller_1 = require("./ticket-status.controller");
const ticket_status_entity_1 = require("./entities/ticket-status.entity");
const typeorm_1 = require("@nestjs/typeorm");
let TicketStatusModule = class TicketStatusModule {
};
exports.TicketStatusModule = TicketStatusModule;
exports.TicketStatusModule = TicketStatusModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ticket_status_entity_1.TicketStatus])],
        controllers: [ticket_status_controller_1.TicketStatusController],
        providers: [ticket_status_service_1.TicketStatusService],
        exports: [ticket_status_service_1.TicketStatusService],
    })
], TicketStatusModule);
//# sourceMappingURL=ticket-status.module.js.map