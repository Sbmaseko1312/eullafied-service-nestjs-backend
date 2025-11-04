"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaffPerformanceModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const schedule_1 = require("@nestjs/schedule");
const staff_performance_service_1 = require("./staff-performance.service");
const staff_performance_controller_1 = require("./staff-performance.controller");
const ticket_entity_1 = require("../ticket/entities/ticket.entity");
const ticket_assignment_entity_1 = require("../ticket-assignment/entities/ticket-assignment.entity");
const user_entity_1 = require("../user/entities/user.entity");
const staff_performance_entity_1 = require("./entities/staff-performance.entity");
let StaffPerformanceModule = class StaffPerformanceModule {
};
exports.StaffPerformanceModule = StaffPerformanceModule;
exports.StaffPerformanceModule = StaffPerformanceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            typeorm_1.TypeOrmModule.forFeature([
                staff_performance_entity_1.StaffPerformanceCounter,
                ticket_entity_1.Ticket,
                ticket_assignment_entity_1.TicketAssignment,
                user_entity_1.User,
            ]),
        ],
        controllers: [staff_performance_controller_1.StaffPerformanceController],
        providers: [staff_performance_service_1.StaffPerformanceService],
        exports: [staff_performance_service_1.StaffPerformanceService],
    })
], StaffPerformanceModule);
//# sourceMappingURL=staff-performance.module.js.map