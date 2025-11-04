import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Role } from '../role/entities/role.entity';
import { Department } from '../department/entities/department.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { MailService } from 'src/mail/mail.service';
export declare class UserService {
    private readonly userRepository;
    private readonly roleRepository;
    private readonly departmentRepository;
    private readonly mailService;
    constructor(userRepository: Repository<User>, roleRepository: Repository<Role>, departmentRepository: Repository<Department>, mailService: MailService);
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
    findByEmail(email: string): Promise<User>;
    findByDepartmentId(departmentId: string): Promise<User[]>;
    findUsersByDepartmentName(departmentName: string): Promise<User[]>;
}
