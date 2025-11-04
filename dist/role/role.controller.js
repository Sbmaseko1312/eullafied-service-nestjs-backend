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
exports.RoleController = void 0;
const common_1 = require("@nestjs/common");
const role_service_1 = require("./role.service");
const create_role_dto_1 = require("./dto/create-role.dto");
const update_role_dto_1 = require("./dto/update-role.dto");
const swagger_1 = require("@nestjs/swagger");
const role_entity_1 = require("./entities/role.entity");
let RoleController = class RoleController {
    roleService;
    constructor(roleService) {
        this.roleService = roleService;
    }
    async create(createRoleDto) {
        return this.roleService.create(createRoleDto);
    }
    async findAll() {
        return this.roleService.findAll();
    }
    async findOne(id) {
        return this.roleService.findOne(id);
    }
    async update(id, updateRoleDto) {
        return this.roleService.update(id, updateRoleDto);
    }
    async remove(id) {
        const role = await this.roleService.findOne(id);
        if (!role) {
            throw new common_1.NotFoundException('Role not found');
        }
        await this.roleService.remove(id);
        return role;
    }
};
exports.RoleController = RoleController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new Role' }),
    (0, swagger_1.ApiBody)({ type: create_role_dto_1.CreateRoleDto }),
    (0, swagger_1.ApiOkResponse)({ type: role_entity_1.Role }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_role_dto_1.CreateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Roles' }),
    (0, swagger_1.ApiOkResponse)({ type: [role_entity_1.Role] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a Role by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Role to retrieve',
    }),
    (0, swagger_1.ApiOkResponse)({ type: role_entity_1.Role }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a Role by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Role to update',
    }),
    (0, swagger_1.ApiBody)({ type: update_role_dto_1.UpdateRoleDto }),
    (0, swagger_1.ApiOkResponse)({ type: role_entity_1.Role }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_role_dto_1.UpdateRoleDto]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a Role by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the Role to delete',
    }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'Role deleted', type: role_entity_1.Role }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'Role not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], RoleController.prototype, "remove", null);
exports.RoleController = RoleController = __decorate([
    (0, swagger_1.ApiTags)('Roles'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/role'),
    __metadata("design:paramtypes", [role_service_1.RoleService])
], RoleController);
//# sourceMappingURL=role.controller.js.map