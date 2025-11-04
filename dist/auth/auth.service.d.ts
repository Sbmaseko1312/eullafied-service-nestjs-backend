import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { MailService } from 'src/mail/mail.service';
export declare class AuthService {
    private readonly userService;
    private readonly jwtService;
    private readonly mailService;
    constructor(userService: UserService, jwtService: JwtService, mailService: MailService);
    login(email: string, password: string): Promise<{
        access_token: string;
        user: import("../user/entities/user.entity").User;
    }>;
    validateUserById(userId: string): Promise<import("../user/entities/user.entity").User>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
}
