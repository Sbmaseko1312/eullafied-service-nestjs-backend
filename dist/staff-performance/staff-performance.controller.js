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
exports.StaffPerformanceController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const staff_performance_service_1 = require("./staff-performance.service");
const create_staff_performance_dto_1 = require("./dto/create-staff-performance.dto");
const update_staff_performance_dto_1 = require("./dto/update-staff-performance.dto");
let StaffPerformanceController = class StaffPerformanceController {
    staffPerformanceService;
    constructor(staffPerformanceService) {
        this.staffPerformanceService = staffPerformanceService;
    }
    create(createStaffPerformanceDto) {
        return this.staffPerformanceService.create(createStaffPerformanceDto);
    }
    findAll() {
        return this.staffPerformanceService.findAll();
    }
    findByUser(userId) {
        return this.staffPerformanceService.findByUser(userId);
    }
    getCurrentWeekPerformance(userId) {
        return this.staffPerformanceService.getCurrentWeekPerformance(userId);
    }
    findByUserAndDateRange(userId, startDate, endDate) {
        return this.staffPerformanceService.findByUserAndDateRange(userId, new Date(startDate), new Date(endDate));
    }
    getTopPerformers(limit) {
        return this.staffPerformanceService.getTopPerformers(limit || 10);
    }
    findOne(userId, metricDate) {
        return this.staffPerformanceService.findOne(userId, metricDate);
    }
    update(userId, metricDate, updateStaffPerformanceDto) {
        return this.staffPerformanceService.update(userId, metricDate, updateStaffPerformanceDto);
    }
    remove(userId, metricDate) {
        return this.staffPerformanceService.remove(userId, metricDate);
    }
    async recalculateCurrentWeek() {
        await this.staffPerformanceService.recalculateCurrentWeek();
        return {
            message: 'Current week metrics recalculated successfully',
            timestamp: new Date().toISOString(),
        };
    }
};
exports.StaffPerformanceController = StaffPerformanceController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Staff Performance Counter' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Performance counter created successfully' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_staff_performance_dto_1.CreateStaffPerformanceDto]),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Staff Performance Counters' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of all performance counters' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('user/:user_id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get all performance metrics for a specific user' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'UUID of the user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of performance counters for the user',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "findByUser", null);
__decorate([
    (0, common_1.Get)('user/:user_id/current-week'),
    (0, swagger_1.ApiOperation)({ summary: 'Get current week performance for a specific user' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'UUID of the user' }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Current week performance metrics',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No data found for current week' }),
    __param(0, (0, common_1.Param)('user_id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "getCurrentWeekPerformance", null);
__decorate([
    (0, common_1.Get)('user/:user_id/date-range'),
    (0, swagger_1.ApiOperation)({ summary: 'Get performance metrics within a date range' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'UUID of the user' }),
    (0, swagger_1.ApiQuery)({
        name: 'start_date',
        description: 'Start date in YYYY-MM-DD format',
        required: true,
    }),
    (0, swagger_1.ApiQuery)({
        name: 'end_date',
        description: 'End date in YYYY-MM-DD format',
        required: true,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of performance counters within date range',
    }),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Query)('start_date')),
    __param(2, (0, common_1.Query)('end_date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "findByUserAndDateRange", null);
__decorate([
    (0, common_1.Get)('top-performers'),
    (0, swagger_1.ApiOperation)({ summary: 'Get top performing staff for current week' }),
    (0, swagger_1.ApiQuery)({
        name: 'limit',
        description: 'Number of top performers to return',
        required: false,
        type: Number,
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'List of top performing staff members',
    }),
    __param(0, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "getTopPerformers", null);
__decorate([
    (0, common_1.Get)(':user_id/:metric_date'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Staff Performance Counter by user and date' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'UUID of the user' }),
    (0, swagger_1.ApiParam)({
        name: 'metric_date',
        description: 'Metric date in YYYY-MM-DD format',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Performance counter retrieved successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Performance counter not found' }),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Param)('metric_date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':user_id/:metric_date'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Staff Performance Counter by user and date' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'UUID of the user' }),
    (0, swagger_1.ApiParam)({
        name: 'metric_date',
        description: 'Metric date in YYYY-MM-DD format',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Performance counter updated successfully',
    }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Performance counter not found' }),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Param)('metric_date')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, update_staff_performance_dto_1.UpdateStaffPerformanceDto]),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':user_id/:metric_date'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Staff Performance Counter by user and date' }),
    (0, swagger_1.ApiParam)({ name: 'user_id', description: 'UUID of the user' }),
    (0, swagger_1.ApiParam)({
        name: 'metric_date',
        description: 'Metric date in YYYY-MM-DD format',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Counter deleted' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Counter not found' }),
    __param(0, (0, common_1.Param)('user_id')),
    __param(1, (0, common_1.Param)('metric_date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StaffPerformanceController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)('recalculate'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    (0, swagger_1.ApiOperation)({
        summary: 'Manually trigger recalculation of current week metrics',
    }),
    (0, swagger_1.ApiResponse)({
        status: 200,
        description: 'Recalculation triggered successfully',
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StaffPerformanceController.prototype, "recalculateCurrentWeek", null);
exports.StaffPerformanceController = StaffPerformanceController = __decorate([
    (0, swagger_1.ApiTags)('Staff Performance Counter'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/staff-performance-counter'),
    __metadata("design:paramtypes", [staff_performance_service_1.StaffPerformanceService])
], StaffPerformanceController);
//# sourceMappingURL=staff-performance.controller.js.map