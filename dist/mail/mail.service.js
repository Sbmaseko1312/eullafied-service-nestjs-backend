"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer = __importStar(require("nodemailer"));
let MailService = class MailService {
    transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: 'brilliantmaseko1312@gmail.com',
                pass: 'eyoz dnzc pbdb wtbw',
            },
        });
    }
    async sendMail(to, subject, html) {
        const info = await this.transporter.sendMail({
            from: '"Ellafied Service" <your-email@example.com>',
            to,
            subject,
            html,
        });
        console.log('Message sent: %s', info.messageId);
        return info;
    }
    async sendingUserCreated(email, name, tempPassword) {
        const subject = 'Welcome! Your Account Has Been Created';
        const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .credentials { background-color: #e8f5e9; border: 2px solid #4CAF50; padding: 20px; margin: 20px 0; border-radius: 5px; }
          .password-box { background-color: #fff; padding: 15px; border-radius: 3px; font-family: monospace; font-size: 18px; font-weight: bold; text-align: center; letter-spacing: 2px; color: #2196F3; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
          .warning { background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome to Eullafied Service!</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Your account has been successfully created by our administrator. We're excited to have you on board!</p>
            
            <div class="credentials">
              <h3 style="margin-top: 0; color: #4CAF50;">Your Login Credentials</h3>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Temporary Password:</strong></p>
              <div class="password-box">${tempPassword}</div>
            </div>
            
            <div class="warning">
              <strong>Important Security Notice:</strong> 
              <ul style="margin: 10px 0; padding-left: 20px;">
                <li>Please login and change your password immediately</li>
                <li>Do not share this password with anyone</li>
                <li>This is a temporary password for your first login only</li>
              </ul>
            </div>
            
            <p>Once you log in, please navigate to your profile settings to change your password to something secure and memorable.</p>
            
            <p>If you have any questions or need assistance, please don't hesitate to reach out to our support team.</p>
            
            <p>Best regards,<br>
            The Ellafied Service Team</p>
          </div>
          <div class="footer">
            <p>This is an automated message, please do not reply to this email.</p>
            <p>If you did not expect this email, please contact us immediately.</p>
          </div>
        </div>
      </body>
      </html>
    `;
        return this.sendMail(email, subject, html);
    }
    async sendUserCreated(email, name, resetLink) {
        const subject = 'Welcome! Your Account Has Been Created';
        const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .button { display: inline-block; padding: 12px 30px; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
          .warning { background-color: #fff3cd; border-left: 4px solid #ffc107; padding: 12px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Welcome !</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>Your account has been successfully created by our administrator. We're excited to have you on board!</p>
            
            <p>To get started, please set up your password by clicking the button below:</p>
            
            <p style="text-align: center;">
              <a href="${resetLink}" class="button">Set Up Your Password</a>
            </p>
            
            <p>Alternatively, you can copy and paste this link into your browser:</p>
            <p style="word-break: break-all; background-color: #f4f4f4; padding: 10px; border-radius: 3px;">
              ${resetLink}
            </p>
            
            <div class="warning">
              <strong>Important:</strong> This link will expire in 24 hours for security purposes. If you don't set up your password within this time, please contact your administrator.
            </div>
            
            <p>If you have any questions or need assistance, please don't hesitate to reach out to our support team.</p>
            
            <p>Best regards,<br>
            The Your App Name Team</p>
          </div>
          <div class="footer">
            <p>This is an automated message, please do not reply to this email.</p>
            <p>If you did not expect this email, please contact us immediately.</p>
          </div>
        </div>
      </body>
      </html>
    `;
        return this.sendMail(email, subject, html);
    }
    async sendingPasswordReset(email, name, resetCode) {
        const subject = 'Password Reset Request';
        const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f44336; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
        .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
        .reset-box { background-color: #fff3f3; border: 2px solid #f44336; padding: 20px; margin: 20px 0; border-radius: 5px; }
        .code-box { background-color: #fff; padding: 15px; border-radius: 3px; font-family: monospace; font-size: 22px; font-weight: bold; text-align: center; letter-spacing: 3px; color: #d32f2f; }
        .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
        .note { background-color: #fff8e1; border-left: 4px solid #ffb300; padding: 12px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Password Reset Request</h1>
        </div>
        <div class="content">
          <p>Dear ${name},</p>

          <p>We received a request to reset your password for your Eullafied Service account.</p>

          <div class="reset-box">
            <h3 style="margin-top: 0; color: #f44336;">Your Password Reset Code</h3>
            <div class="code-box">${resetCode}</div>
          </div>

          <div class="note">
            <strong>Important:</strong>
            <ul style="margin: 10px 0; padding-left: 20px;">
              <li>This code is valid for <strong>15 minutes</strong>.</li>
              <li>If you did not request a password reset, please ignore this email.</li>
              <li>Do not share this code with anyone.</li>
            </ul>
          </div>

          <p>Once you enter the above code on the reset page, you will be able to create a new password for your account.</p>

          <p>For your security, please ensure your new password is strong and unique.</p>

          <p>Best regards,<br>
          The Eullafied Service Team</p>
        </div>
        <div class="footer">
          <p>This is an automated message, please do not reply to this email.</p>
          <p>If you did not request a password reset, please contact support immediately.</p>
        </div>
      </div>
    </body>
    </html>
  `;
        return this.sendMail(email, subject, html);
    }
    async sendPasswordChanged(email, name) {
        const subject = 'Password Successfully Changed';
        const html = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #4CAF50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
          .warning { background-color: #ffebee; border-left: 4px solid #f44336; padding: 12px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>✓ Password Changed Successfully</h1>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            
            <p>This email confirms that your password was successfully changed.</p>
            
            <p>You can now log in to your account using your new password.</p>
            
            <div class="warning">
              <strong>Didn't make this change?</strong> If you didn't change your password, please contact our support team immediately as your account may be compromised.
            </div>
            
            <p>Thank you for keeping your account secure!</p>
            
            <p>Best regards,<br>
            The Your App Name Team</p>
          </div>
          <div class="footer">
            <p>This is an automated message, please do not reply to this email.</p>
          </div>
        </div>
      </body>
      </html>
    `;
        return this.sendMail(email, subject, html);
    }
};
exports.MailService = MailService;
exports.MailService = MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MailService);
//# sourceMappingURL=mail.service.js.map