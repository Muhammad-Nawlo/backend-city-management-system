import EmailRepository from "../repositories/emailRepository.js";

const emailRepository = new EmailRepository();

export class EmailService {
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
}

export default EmailService;