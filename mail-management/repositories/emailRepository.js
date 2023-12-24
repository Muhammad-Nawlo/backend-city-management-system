import Email from "../models/Email.js";
import mongoose from "mongoose";
import NotFoundError from "../errors/notFoundError.js";

class EmailRepository {

    async create(emailDTO) {
        const newEmail = new Email({
            sender: emailDTO.sender,
            recipient: emailDTO.recipient,
            subject: emailDTO.subject,
            body: emailDTO.body
        });
        const email = await newEmail.save();
        return email;
    }


    async delete(emailDTO) {
        const email = await Email.findByIdAndDelete(emailDTO.id);
        if (!email) {
            throw new NotFoundError();
        }
        return email;
    }

    async getById(emailDTO) {
        const email = await Email.findById(emailDTO.id)
        if (!email) {
            throw new NotFoundError();
        }
        return email;
    }

    async all() {
        const emails = await Email.find().limit(10).exec();
        return emails;
    }
}

export default EmailRepository;