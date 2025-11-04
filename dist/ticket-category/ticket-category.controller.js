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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TicketCategoryController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ticket_category_service_1 = require("./ticket-category.service");
const create_ticket_category_dto_1 = require("./dto/create-ticket-category.dto");
const ticket_category_entity_1 = require("./entities/ticket-category.entity");
const update_ticket_category_dto_1 = require("./dto/update-ticket-category.dto");
let TicketCategoryController = class TicketCategoryController {
    ticketCategoryService;
    constructor(ticketCategoryService) {
        this.ticketCategoryService = ticketCategoryService;
    }
    create(createTicketCategoryDto) {
        return this.ticketCategoryService.create(createTicketCategoryDto);
    }
    async findAll() {
        return this.ticketCategoryService.findAll();
    }
    async findOne(id) {
        return this.ticketCategoryService.findOne(id);
    }
    async update(id, updateTicketCategoryDto) {
        return this.ticketCategoryService.update(id, update_ticket_category_dto_1.UpdateTicketCategoryDto);
    }
    async remove(id) {
        const ticketCategory = await this.ticketCategoryService.findOne(id);
        if (!ticketCategory) {
            throw new common_1.NotFoundException('Ticket Category not found');
        }
        await this.ticketCategoryService.remove(id);
        return ticketCategory;
    }
};
exports.TicketCategoryController = TicketCategoryController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Ticket Category' }),
    (0, swagger_1.ApiBody)({ type: create_ticket_category_dto_1.CreateTicketCategoryDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_category_entity_1.TicketCategory }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_category_dto_1.CreateTicketCategoryDto]),
    __metadata("design:returntype", void 0)
], TicketCategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Ticket Categories' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_category_entity_1.TicketCategory] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketCategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Ticket Category by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Category to retrieve',
    }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_category_entity_1.TicketCategory }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketCategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Ticket Category by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Category to update',
    }),
    (0, swagger_1.ApiBody)({ type: update_ticket_category_dto_1.UpdateTicketCategoryDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_category_entity_1.TicketCategory }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ticket_category_dto_1.UpdateTicketCategoryDto]),
    __metadata("design:returntype", Promise)
], TicketCategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Ticket Category by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Category to delete',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ticket Category deleted', type: ticket_category_entity_1.TicketCategory }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Ticket Category not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketCategoryController.prototype, "remove", null);
exports.TicketCategoryController = TicketCategoryController = __decorate([
    (0, swagger_1.ApiTags)('Ticket Categories'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/ticket-category'),
    __metadata("design:paramtypes", [ticket_category_service_1.TicketCategoryService])
], TicketCategoryController);
//# sourceMappingURL=ticket-category.controller.js.map