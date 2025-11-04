"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketAssignmentModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_assignment_entity_1 = require("./entities/ticket-assignment.entity");
const ticket_entity_1 = require("../ticket/entities/ticket.entity");
const user_entity_1 = require("../user/entities/user.entity");
const ticket_assignment_service_1 = require("./ticket-assignment.service");
const ticket_assignment_controller_1 = require("./ticket-assignment.controller");
let TicketAssignmentModule = class TicketAssignmentModule {
};
exports.TicketAssignmentModule = TicketAssignmentModule;
exports.TicketAssignmentModule = TicketAssignmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([ticket_assignment_entity_1.TicketAssignment, ticket_entity_1.Ticket, user_entity_1.User]),
        ],
        providers: [ticket_assignment_service_1.TicketAssignmentService],
        controllers: [ticket_assignment_controller_1.TicketAssignmentController],
        exports: [ticket_assignment_service_1.TicketAssignmentService],
    })
], TicketAssignmentModule);
//# sourceMappingURL=ticket-assignment.module.js.map