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
exports.CreateStaffPerformanceDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateStaffPerformanceDto {
    user_id;
    metric_date;
    tickets_resolved;
    avg_resolution_seconds;
}
exports.CreateStaffPerformanceDto = CreateStaffPerformanceDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'User ID (UUID) of the staff member' }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateStaffPerformanceDto.prototype, "user_id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Metric date in YYYY-MM-DD format' }),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsDateString)(),
    __metadata("design:type", String)
], CreateStaffPerformanceDto.prototype, "metric_date", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of tickets resolved', required: false, default: 0 }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateStaffPerformanceDto.prototype, "tickets_resolved", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Average resolution time in seconds', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0),
    __metadata("design:type", Number)
], CreateStaffPerformanceDto.prototype, "avg_resolution_seconds", void 0);
//# sourceMappingURL=create-staff-performance.dto.js.map