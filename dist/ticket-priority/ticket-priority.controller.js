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
exports.TicketPriorityController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const create_ticket_priority_dto_1 = require("./dto/create-ticket-priority.dto");
const update_ticket_priority_dto_1 = require("./dto/update-ticket-priority.dto");
const ticket_priority_entity_1 = require("./entities/ticket-priority.entity");
const ticket_priority_service_1 = require("./ticket-priority.service");
let TicketPriorityController = class TicketPriorityController {
    ticketPriorityService;
    constructor(ticketPriorityService) {
        this.ticketPriorityService = ticketPriorityService;
    }
    async create(createTicketPriorityDto) {
        return this.ticketPriorityService.create(createTicketPriorityDto);
    }
    async findAll() {
        return this.ticketPriorityService.findAll();
    }
    async findOne(id) {
        return this.ticketPriorityService.findOne(id);
    }
    async update(id, updateTicketPriorityDto) {
        return this.ticketPriorityService.update(id, updateTicketPriorityDto);
    }
    async remove(id) {
        const priority = await this.ticketPriorityService.findOne(id);
        if (!priority) {
            throw new common_1.NotFoundException('Ticket Priority not found');
        }
        await this.ticketPriorityService.remove(id);
        return priority;
    }
};
exports.TicketPriorityController = TicketPriorityController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Ticket Priority' }),
    (0, swagger_1.ApiBody)({ type: create_ticket_priority_dto_1.CreateTicketPriorityDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_priority_entity_1.TicketPriority }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_priority_dto_1.CreateTicketPriorityDto]),
    __metadata("design:returntype", Promise)
], TicketPriorityController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Ticket Priorities' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_priority_entity_1.TicketPriority] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketPriorityController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Ticket Priority by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Priority to retrieve',
    }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_priority_entity_1.TicketPriority }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketPriorityController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Ticket Priority by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Priority to update',
    }),
    (0, swagger_1.ApiBody)({ type: update_ticket_priority_dto_1.UpdateTicketPriorityDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_priority_entity_1.TicketPriority }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ticket_priority_dto_1.UpdateTicketPriorityDto]),
    __metadata("design:returntype", Promise)
], TicketPriorityController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Ticket Priority by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Priority to delete',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ticket Priority deleted', type: ticket_priority_entity_1.TicketPriority }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Ticket Priority not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketPriorityController.prototype, "remove", null);
exports.TicketPriorityController = TicketPriorityController = __decorate([
    (0, swagger_1.ApiTags)('Ticket Priorities'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/ticket-priorities'),
    __metadata("design:paramtypes", [ticket_priority_service_1.TicketPriorityService])
], TicketPriorityController);
//# sourceMappingURL=ticket-priority.controller.js.map