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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTicketDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class CreateTicketDto {
    ticket_number;
    description;
    requester_id;
    department_id;
    category_id;
    priority_id;
    status_id;
    manager_id;
    manager_comment;
    closed_at;
    cancelled_at;
    resolution_summary;
}
exports.CreateTicketDto = CreateTicketDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Unique ticket number', maxLength: 40 }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "ticket_number", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ticket description', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Requester ID (user who raised the ticket)' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "requester_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Department ID', required: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "department_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Category ID', required: false }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "category_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Priority ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "priority_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status ID' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "status_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Manager ID', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "manager_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Manager comment', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "manager_comment", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ticket closed date', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_transformer_1.Transform)(({ value }) => (value === '' ? undefined : value)),
    __metadata("design:type", Date)
], CreateTicketDto.prototype, "closed_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Ticket cancelled date', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsDateString)(),
    (0, class_transformer_1.Transform)(({ value }) => (value === '' ? undefined : value)),
    __metadata("design:type", Date)
], CreateTicketDto.prototype, "cancelled_at", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Resolution summary', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTicketDto.prototype, "resolution_summary", void 0);
//# sourceMappingURL=create-ticket.dto.js.map