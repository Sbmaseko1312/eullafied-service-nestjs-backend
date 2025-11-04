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
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./entities/user.entity");
const role_entity_1 = require("../role/entities/role.entity");
const department_entity_1 = require("../department/entities/department.entity");
const bcrypt_1 = require("../utils/bcrypt");
const mail_service_1 = require("../mail/mail.service");
const password_util_1 = require("../utils/password.util");
let UserService = class UserService {
    userRepository;
    roleRepository;
    departmentRepository;
    mailService;
    constructor(userRepository, roleRepository, departmentRepository, mailService) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.departmentRepository = departmentRepository;
        this.mailService = mailService;
    }
    async create(createUserDto) {
        const role = await this.roleRepository.findOne({
            where: { role_id: createUserDto.role_id },
        });
        if (!role) {
            throw new common_1.NotFoundException(`Role with ID ${createUserDto.role_id} not found`);
        }
        const department = await this.departmentRepository.findOne({
            where: { department_id: createUserDto.department_id },
        });
        if (!department) {
            throw new common_1.NotFoundException(`Department with ID ${createUserDto.department_id} not found`);
        }
        const passwd = (0, password_util_1.generateRandomPassword)();
        const hashedPassword = await (0, bcrypt_1.encodePassword)(passwd);
        createUserDto.password = hashedPassword;
        const user = this.userRepository.create({
            ...createUserDto,
            password: hashedPassword,
            role,
            department,
        });
        const savedUser = await this.userRepository.save(user);
        try {
            await this.mailService.sendingUserCreated(savedUser.email, `${savedUser.name} ${savedUser.surname}`, passwd);
        }
        catch (error) {
            console.error('Failed to send welcome email:', error);
        }
        return savedUser;
    }
    async findAll() {
        return this.userRepository.find({
            relations: ['role', 'department'],
        });
    }
    async findOne(id) {
        const user = await this.userRepository.findOne({
            where: { user_id: id },
            relations: ['role', 'department'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }
    async update(id, updateUserDto) {
        const user = await this.userRepository.preload({
            user_id: id,
            ...updateUserDto,
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        if (updateUserDto.password) {
            user.password = await (0, bcrypt_1.encodePassword)(updateUserDto.password);
        }
        if (updateUserDto.role_id) {
            const role = await this.roleRepository.findOne({
                where: { role_id: updateUserDto.role_id },
            });
            if (!role) {
                throw new common_1.NotFoundException(`Role with ID ${updateUserDto.role_id} not found`);
            }
            user.role = role;
        }
        if (updateUserDto.department_id) {
            const department = await this.departmentRepository.findOne({
                where: { department_id: updateUserDto.department_id },
            });
            if (!department) {
                throw new common_1.NotFoundException(`Department with ID ${updateUserDto.department_id} not found`);
            }
            user.department = department;
        }
        return this.userRepository.save(user);
    }
    async remove(id) {
        const user = await this.userRepository.findOne({
            where: { user_id: id },
            relations: ['role', 'department'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${id} not found`);
        }
        await this.userRepository.remove(user);
        return user;
    }
    async findByEmail(email) {
        const user = await this.userRepository.findOne({
            where: { email },
            relations: ['role', 'department'],
        });
        if (!user) {
            throw new common_1.NotFoundException(`User with email ${email} not found`);
        }
        return user;
    }
    async findByDepartmentId(departmentId) {
        const users = await this.userRepository.find({
            where: { department: { department_id: departmentId } },
            relations: ['role', 'department'],
        });
        if (!users || users.length === 0) {
            throw new common_1.NotFoundException(`No users found for department ID ${departmentId}`);
        }
        return users;
    }
    async findUsersByDepartmentName(departmentName) {
        const department = await this.departmentRepository.findOne({
            where: { department_name: departmentName },
        });
        if (!department) {
            throw new common_1.NotFoundException(`Department with name ${departmentName} not found`);
        }
        const users = await this.userRepository.find({
            where: { department: { department_id: department.department_id } },
            relations: ['role', 'department'],
        });
        if (!users.length) {
            throw new common_1.NotFoundException(`No users found for department ${departmentName}`);
        }
        return users;
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __param(2, (0, typeorm_1.InjectRepository)(department_entity_1.Department)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        mail_service_1.MailService])
], UserService);
//# sourceMappingURL=user.service.js.map