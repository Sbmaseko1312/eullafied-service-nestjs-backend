export declare class MailService {
    private transporter;
    constructor();
    sendMail(to: string, subject: string, html: string): Promise<any>;
    sendingUserCreated(email: string, name: string, tempPassword: string): Promise<any>;
    sendUserCreated(email: string, name: string, resetLink: string): Promise<any>;
    sendingPasswordReset(email: string, name: string, resetCode: string): Promise<any>;
    sendPasswordChanged(email: string, name: string): Promise<any>;
}
