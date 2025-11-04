"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketCategoryModule = void 0;
const common_1 = require("@nestjs/common");
const ticket_category_service_1 = require("./ticket-category.service");
const ticket_category_controller_1 = require("./ticket-category.controller");
const typeorm_1 = require("@nestjs/typeorm");
const ticket_category_entity_1 = require("./entities/ticket-category.entity");
let TicketCategoryModule = class TicketCategoryModule {
};
exports.TicketCategoryModule = TicketCategoryModule;
exports.TicketCategoryModule = TicketCategoryModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([ticket_category_entity_1.TicketCategory])],
        controllers: [ticket_category_controller_1.TicketCategoryController],
        providers: [ticket_category_service_1.TicketCategoryService],
        exports: [ticket_category_service_1.TicketCategoryService],
    })
], TicketCategoryModule);
//# sourceMappingURL=ticket-category.module.js.map