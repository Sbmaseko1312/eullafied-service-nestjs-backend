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
exports.TicketStatusController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ticket_status_entity_1 = require("./entities/ticket-status.entity");
const create_ticket_status_dto_1 = require("./dto/create-ticket-status.dto");
const update_ticket_status_dto_1 = require("./dto/update-ticket-status.dto");
const ticket_status_service_1 = require("./ticket-status.service");
let TicketStatusController = class TicketStatusController {
    ticketStatusService;
    constructor(ticketStatusService) {
        this.ticketStatusService = ticketStatusService;
    }
    async create(createTicketStatusDto) {
        return this.ticketStatusService.create(createTicketStatusDto);
    }
    async findAll() {
        return this.ticketStatusService.findAll();
    }
    async findOne(id) {
        return this.ticketStatusService.findOne(id);
    }
    async update(id, updateTicketStatusDto) {
        return this.ticketStatusService.update(id, updateTicketStatusDto);
    }
    async remove(id) {
        const ticketStatus = await this.ticketStatusService.findOne(id);
        if (!ticketStatus) {
            throw new common_1.NotFoundException('Ticket Status not found');
        }
        await this.ticketStatusService.remove(id);
        return ticketStatus;
    }
    async findByStatusName(statusName) {
        return this.ticketStatusService.findByStatusName(statusName);
    }
};
exports.TicketStatusController = TicketStatusController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new TicketStatus' }),
    (0, swagger_1.ApiBody)({ type: create_ticket_status_dto_1.CreateTicketStatusDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_status_entity_1.TicketStatus }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_status_dto_1.CreateTicketStatusDto]),
    __metadata("design:returntype", Promise)
], TicketStatusController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all TicketStatuses' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_status_entity_1.TicketStatus] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketStatusController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Ticket Status by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Status to retrieve',
    }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_status_entity_1.TicketStatus }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketStatusController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Ticket Status by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Status to update',
    }),
    (0, swagger_1.ApiBody)({ type: update_ticket_status_dto_1.UpdateTicketStatusDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_status_entity_1.TicketStatus }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ticket_status_dto_1.UpdateTicketStatusDto]),
    __metadata("design:returntype", Promise)
], TicketStatusController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Ticket Status by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Status to delete',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ticket Status deleted', type: ticket_status_entity_1.TicketStatus }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Ticket Status not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketStatusController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('name/:statusName'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Ticket Status by name' }),
    (0, swagger_1.ApiParam)({
        name: 'statusName',
        required: true,
        description: 'The name of the Ticket Status to retrieve (e.g., Approved)',
    }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_status_entity_1.TicketStatus }),
    __param(0, (0, common_1.Param)('statusName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketStatusController.prototype, "findByStatusName", null);
exports.TicketStatusController = TicketStatusController = __decorate([
    (0, swagger_1.ApiTags)('Ticket Statuses'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/ticket-status'),
    __metadata("design:paramtypes", [ticket_status_service_1.TicketStatusService])
], TicketStatusController);
//# sourceMappingURL=ticket-status.controller.js.map