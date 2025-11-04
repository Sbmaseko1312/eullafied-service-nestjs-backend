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
exports.TicketAssignmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const ticket_assignment_service_1 = require("./ticket-assignment.service");
const create_ticket_assignment_dto_1 = require("./dto/create-ticket-assignment.dto");
const update_ticket_assignment_dto_1 = require("./dto/update-ticket-assignment.dto");
const ticket_assignment_entity_1 = require("./entities/ticket-assignment.entity");
let TicketAssignmentController = class TicketAssignmentController {
    assignmentService;
    constructor(assignmentService) {
        this.assignmentService = assignmentService;
    }
    async create(createDto) {
        return this.assignmentService.create(createDto);
    }
    async findAll() {
        return this.assignmentService.findAll();
    }
    async findOne(id) {
        return this.assignmentService.findOne(id);
    }
    async update(id, updateDto) {
        return this.assignmentService.update(id, updateDto);
    }
    async remove(id) {
        const assignment = await this.assignmentService.findOne(id);
        if (!assignment)
            throw new common_1.NotFoundException('Assignment not found');
        return this.assignmentService.remove(id);
    }
    async findByUser(user_id) {
        return this.assignmentService.findByUserId(user_id);
    }
    async unassignTicket(assignment_id, message) {
        return this.assignmentService.unassignTicket(assignment_id, message);
    }
};
exports.TicketAssignmentController = TicketAssignmentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Ticket Assignment' }),
    (0, swagger_1.ApiBody)({ type: create_ticket_assignment_dto_1.CreateTicketAssignmentDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_assignment_entity_1.TicketAssignment }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_ticket_assignment_dto_1.CreateTicketAssignmentDto]),
    __metadata("design:returntype", Promise)
], TicketAssignmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Ticket Assignments' }),
    (0, swagger_1.ApiOkResponse)({ type: [ticket_assignment_entity_1.TicketAssignment] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TicketAssignmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Ticket Assignment by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Assignment to retrieve',
    }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_assignment_entity_1.TicketAssignment }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketAssignmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Ticket Assignment by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Assignment to update',
    }),
    (0, swagger_1.ApiBody)({ type: update_ticket_assignment_dto_1.UpdateTicketAssignmentDto }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_assignment_entity_1.TicketAssignment }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_ticket_assignment_dto_1.UpdateTicketAssignmentDto]),
    __metadata("design:returntype", Promise)
], TicketAssignmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Soft remove (unassign) a Ticket Assignment by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Ticket Assignment to remove',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Assignment unassigned', type: ticket_assignment_entity_1.TicketAssignment }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Assignment not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketAssignmentController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('user/:user_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all ticket assignments for a specific user' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'User ID to filter assignments' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of ticket assignments for the specified user',
        type: [ticket_assignment_entity_1.TicketAssignment],
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TicketAssignmentController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Post)('unassign/:assignment_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Unassign a ticket with a reason' }),
    (0, swagger_1.ApiParam)({ name: 'assignment_id', description: 'The ID of the assignment to unassign' }),
    (0, swagger_1.ApiBody)({ type: String, description: 'Reason for unassignment' }),
    (0, swagger_1.ApiOkResponse)({ type: ticket_assignment_entity_1.TicketAssignment }),
    __param(0, (0, common_1.Param)('assignment_id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TicketAssignmentController.prototype, "unassignTicket", null);
exports.TicketAssignmentController = TicketAssignmentController = __decorate([
    (0, swagger_1.ApiTags)('Ticket Assignments'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/ticket-assignment'),
    __metadata("design:paramtypes", [ticket_assignment_service_1.TicketAssignmentService])
], TicketAssignmentController);
//# sourceMappingURL=ticket-assignment.controller.js.map