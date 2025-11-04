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
exports.DepartmentController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const department_service_1 = require("./department.service");
const create_department_dto_1 = require("./dto/create-department.dto");
const update_department_dto_1 = require("./dto/update-department.dto");
const department_entity_1 = require("./entities/department.entity");
let DepartmentController = class DepartmentController {
    departmentService;
    constructor(departmentService) {
        this.departmentService = departmentService;
    }
    async create(createDepartmentDto) {
        return this.departmentService.create(createDepartmentDto);
    }
    async findAll() {
        return this.departmentService.findAll();
    }
    async findOne(id) {
        return this.departmentService.findOne(id);
    }
    async update(id, updateDepartmentDto) {
        return this.departmentService.update(id, updateDepartmentDto);
    }
    async remove(id) {
        const department = await this.departmentService.findOne(id);
        if (!department) {
            throw new common_1.NotFoundException('Department not found');
        }
        await this.departmentService.remove(id);
        return department;
    }
};
exports.DepartmentController = DepartmentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Department' }),
    (0, swagger_1.ApiBody)({ type: create_department_dto_1.CreateDepartmentDto }),
    (0, swagger_1.ApiOkResponse)({ type: department_entity_1.Department }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_department_dto_1.CreateDepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Departments' }),
    (0, swagger_1.ApiOkResponse)({ type: [department_entity_1.Department] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Department by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Department to retrieve',
    }),
    (0, swagger_1.ApiOkResponse)({ type: department_entity_1.Department }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Department by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Department to update',
    }),
    (0, swagger_1.ApiBody)({ type: update_department_dto_1.UpdateDepartmentDto }),
    (0, swagger_1.ApiOkResponse)({ type: department_entity_1.Department }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_department_dto_1.UpdateDepartmentDto]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Department by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Department to delete',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Department deleted', type: department_entity_1.Department }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Department not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DepartmentController.prototype, "remove", null);
exports.DepartmentController = DepartmentController = __decorate([
    (0, swagger_1.ApiTags)('Departments'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/department'),
    __metadata("design:paramtypes", [department_service_1.DepartmentService])
], DepartmentController);
//# sourceMappingURL=department.controller.js.map