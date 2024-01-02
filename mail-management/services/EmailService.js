import EmailRepository from "../repositories/emailRepository.js";
import nodemailer from 'nodemailer'
import config from "../config/config.js";
import pug from 'pug';
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const emailRepository = new EmailRepository();

export class EmailService {
    constructor() {
        this.mailer = nodemailer.createTransport({
            port: config.mailService.port,         // true for 465, false for other ports
            host: config.mailService.host,
        });
    }

    async create(emailDTO) {
        const newEmail = await emailRepository.create(emailDTO);
        return newEmail;
    }

    async delete(emailDTO) {
        const email = await emailRepository.delete(emailDTO);
        return email;
    }

    async get(emailDTO) {
        const email = await emailRepository.getById(emailDTO);
        return email;
    }


    async all() {
        const emails = await emailRepository.all();
        return emails;
    }

    async resetPassword(email) {
        const result = await this.mailer.sendMail({
            from: config.mailService.email,
            to: email,
            subject: 'Reset Password',
            html: pug.renderFile(__dirname + '/../views/reset-password.pug', {
                email: email,
                resetLink: config.frontendUrl + '/reset-password',
                appName: config.appName
            })
        });
        return result;
    }

    async verificationEmail(email) {
        const result = await this.mailer.sendMail({
            from: config.mailService.email,
            to: email,
            subject: 'Email Verification',
            html: pug.renderFile(__dirname + '/../views/email-verification.pug', {
                email: email,
                verifyLink:  `${config.url}/verify-email`,
                appName: config.appName
            })
        });
        return result;
    }
}

export default EmailService;