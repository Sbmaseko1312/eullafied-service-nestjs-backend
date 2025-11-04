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
exports.TicketController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ticket_service_1 = require("./ticket.service");
const create_ticket_dto_1 = require("./dto/create-ticket.dto");
const update_ticket_dto_1 = require("./dto/update-ticket.dto");
const ticket_entity_1 = require("./entities/ticket.entity");
let TicketController = class TicketController {
    ticketService;
    constructor(ticketService) {
        this.ticketService = ticketService;
    }
    async create(createTicketDto) {
        return this.ticketService.create(createTicketDto);
    }
    async findAll() {
        return this.ticketService.findAll();
    }
    async findOne(id) {
        return this.ticketService.findOne(id);
    }
    async putUpdate(id, updateTicketDto) {
        return this.ticketService.update(id, updateTicketDto);
    }
    async remove(id) {
        const ticket = await this.ticketService.findOne(id);
        if (!ticket) {
            throw new common_1.NotFoundException(`Ticket ${id} not found`);
        }
        await this.ticketService.remove(id);
        return ticket;
    }
    async findByRequester(requester_id) {
        return this.ticketService.findByRequester(requester_id);
    }
    async findByDepartment(department_id) {
        return this.ticketService.findByDepartment(department_id);
    }
    async findByDepartmentAndStatus(department_id, status_id) {
        return this.ticketService.findByDepartmentAndStatus(department_id, status_id);
    }
    async findByStatus(status_id) {
        return this.ticketService.findByStatus(status_id);
    }
    async countAll() {
        return this.ticketService.countAll();
    }
    async countByStatus(status_id) {
        return this.ticketService.countByStatus(status_id);
    }
    async countByDepartmentAndStatus(department_id, status_name) {
        return this.ticketService.countByDepartmentAndStatus(department_id, status_name);
    }
};
exports.TicketController = TicketController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Ticket' }),
    (0, swagger_1.ApiBody)({ type: create_ticket_dto_1.CreateTicketDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_entity_1.Ticket }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_dto_1.CreateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Tickets' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_entity_1.Ticket] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Ticket by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'The Ticket ID to retrieve' }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_entity_1.Ticket }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Ticket by ID (PUT alternative)' }),
    (0, swagger_1.ApiBody)({ type: update_ticket_dto_1.UpdateTicketDto }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ticket_dto_1.UpdateTicketDto]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "putUpdate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Ticket by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'The Ticket ID to delete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Ticket deleted', type: ticket_entity_1.Ticket }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Ticket not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('requester/:requester_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Tickets by Requester ID' }),
    (0, swagger_1.ApiParam)({ name: 'requester_id', required: true, description: 'The requester ID to filter tickets' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_entity_1.Ticket] }),
    __param(0, (0, common_1.Param)('requester_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findByRequester", null);
__decorate([
    (0, common_1.Get)('department/:department_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Tickets by Department ID' }),
    (0, swagger_1.ApiParam)({ name: 'department_id', required: true, description: 'The department ID to filter tickets' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_entity_1.Ticket] }),
    __param(0, (0, common_1.Param)('department_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findByDepartment", null);
__decorate([
    (0, common_1.Get)('department/:department_id/status/:status_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Tickets by Department ID and Status ID' }),
    (0, swagger_1.ApiParam)({ name: 'department_id', required: true, description: 'The department ID to filter tickets' }),
    (0, swagger_1.ApiParam)({ name: 'status_id', required: true, description: 'The status ID to filter tickets' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_entity_1.Ticket] }),
    __param(0, (0, common_1.Param)('department_id')),
    __param(1, (0, common_1.Param)('status_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findByDepartmentAndStatus", null);
__decorate([
    (0, common_1.Get)('status/:status_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Tickets by Status ID' }),
    (0, swagger_1.ApiParam)({ name: 'status_id', required: true, description: 'The status ID to filter tickets' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_entity_1.Ticket] }),
    __param(0, (0, common_1.Param)('status_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "findByStatus", null);
__decorate([
    (0, common_1.Get)('count'),
    (0, swagger_1.ApiOperation)({ summary: 'Count all Tickets' }),
    (0, swagger_1.ApiOkResponse)({ type: Number }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "countAll", null);
__decorate([
    (0, common_1.Get)('count/status/:status_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Count all Tickets by Status ID' }),
    (0, swagger_1.ApiParam)({ name: 'status_id', required: true, description: 'The status ID to filter tickets' }),
    (0, swagger_1.ApiOkResponse)({ type: Number }),
    __param(0, (0, common_1.Param)('status_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "countByStatus", null);
__decorate([
    (0, common_1.Get)('count/department/:department_id/status/:status_name'),
    (0, swagger_1.ApiOperation)({ summary: 'Count Tickets by Department ID and Status ID' }),
    (0, swagger_1.ApiParam)({ name: 'department_id', required: true, description: 'The department ID to filter tickets' }),
    (0, swagger_1.ApiParam)({ name: 'status_name', required: true, description: 'The status name to filter tickets' }),
    (0, swagger_1.ApiOkResponse)({ type: Number }),
    __param(0, (0, common_1.Param)('department_id')),
    __param(1, (0, common_1.Param)('status_name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TicketController.prototype, "countByDepartmentAndStatus", null);
exports.TicketController = TicketController = __decorate([
    (0, swagger_1.ApiTags)('Tickets'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/tickets'),
    __metadata("design:paramtypes", [ticket_service_1.TicketService])
], TicketController);
//# sourceMappingURL=ticket.controller.js.map