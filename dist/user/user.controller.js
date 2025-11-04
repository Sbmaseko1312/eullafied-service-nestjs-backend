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
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_service_1 = require("./user.service");
const create_user_dto_1 = require("./dto/create-user.dto");
const update_user_dto_1 = require("./dto/update-user.dto");
const swagger_1 = require("@nestjs/swagger");
const user_entity_1 = require("./entities/user.entity");
const public_decorator_1 = require("../auth/public.decorator");
let UserController = class UserController {
    userService;
    constructor(userService) {
        this.userService = userService;
    }
    async create(createUserDto) {
        return this.userService.create(createUserDto);
    }
    async findAll() {
        return this.userService.findAll();
    }
    async findOne(id) {
        return this.userService.findOne(id);
    }
    async update(id, updateUserDto) {
        return this.userService.update(id, updateUserDto);
    }
    async remove(id) {
        const user = await this.userService.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        await this.userService.remove(id);
        return user;
    }
    async findByDepartment(departmentId) {
        return await this.userService.findByDepartmentId(departmentId);
    }
    async findByDepartmentName(departmentName) {
        return await this.userService.findUsersByDepartmentName(departmentName);
    }
};
exports.UserController = UserController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new User' }),
    (0, swagger_1.ApiOkResponse)({ type: user_entity_1.User }),
    (0, public_decorator_1.Public)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all Users' }),
    (0, swagger_1.ApiOkResponse)({ type: [user_entity_1.User] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a User by ID' }),
    (0, swagger_1.ApiParam)({
        name: 'id',
        required: true,
        description: 'The ID of the User to retrieve',
    }),
    (0, swagger_1.ApiOkResponse)({ type: user_entity_1.User }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a User by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'The ID of the User to update' }),
    (0, swagger_1.ApiBody)({ type: update_user_dto_1.UpdateUserDto }),
    (0, swagger_1.ApiOkResponse)({ type: user_entity_1.User }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a User by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'The ID of the User to delete' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'User deleted', type: user_entity_1.User }),
    (0, swagger_1.ApiResponse)({ status: 401, description: 'Unauthorized' }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'User not found' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('department/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Find Users by Department ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', required: true, description: 'The ID of the Department' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of users in the department', type: [user_entity_1.User] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No users found for the given department ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByDepartment", null);
__decorate([
    (0, common_1.Get)('department/name/:name'),
    (0, swagger_1.ApiOperation)({ summary: 'Find Users by Department Name' }),
    (0, swagger_1.ApiParam)({ name: 'name', required: true, description: 'The name of the Department' }),
    (0, swagger_1.ApiResponse)({ status: 200, description: 'List of users in the department', type: [user_entity_1.User] }),
    (0, swagger_1.ApiResponse)({ status: 404, description: 'No users found for the given department name' }),
    __param(0, (0, common_1.Param)('name')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "findByDepartmentName", null);
exports.UserController = UserController = __decorate([
    (0, swagger_1.ApiTags)('Users'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.Controller)('api/user'),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
//# sourceMappingURL=user.controller.js.map