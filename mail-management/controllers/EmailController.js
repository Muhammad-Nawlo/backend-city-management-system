import EmailDTO from "../dto/EmailDTO.js";
import EmailService from "../services/EmailService.js";
import ResponseHelper from "../helpers/responseHelper.js";

const emailService = new EmailService();
export default class EmailController {
    async all(req, res, next) {
        const emails = await emailService.all();

        ResponseHelper.success(res, emails);
    }

    async create(req, res, next) {
        const {sender, recipient, subject, body} = req.body;
        const emailDTO = new EmailDTO(sender, recipient, subject, body);
        const newEmail = await emailService.create(emailDTO);

        ResponseHelper.created(res, newEmail);
    }

    async delete(req, res, next) {
        const emailDTO = new EmailDTO();
        emailDTO.id = req.params.id;
        const email = await emailService.delete(emailDTO);

        ResponseHelper.success(res, email);
    }

    async get(req, res, next) {
        const emailDTO = new EmailDTO();
        emailDTO.id = req.params.id;
        const email = await emailService.get(emailDTO);

        ResponseHelper.success(res, email);
    }
}