import Payment from "../models/Payment.js";

import NotFoundError from "../errors/notFoundError.js";
import { populate } from "dotenv";
import searchHandler from "../helpers/searchHandler.js";

class PaymentRepository {
    async create(paymentDTO) {
        const newPayment = new Payment({
            rentalId: paymentDTO.rentalId,
            tenantId: paymentDTO.tenantId,
            date: paymentDTO.date,
            amount: paymentDTO.amount,
        });
        const payment = await newPayment.save();
        return payment;
    }

    async update(paymentDTO) {
        const payment = await Payment.findByIdAndUpdate(paymentDTO.id, {
            rentalId: paymentDTO.rentalId,
            tenantId: paymentDTO.tenantId,
            date: paymentDTO.date,
            amount: paymentDTO.amount,
        }, {
            new: true
        }
        );
        if (!payment) {
            throw new NotFoundError();
        }
        return payment;
    }

    async delete(paymentDTO) {
        const payment = await Payment.findByIdAndDelete(paymentDTO.id);
        if (!payment) {
            throw new NotFoundError();
        }
        return payment;
    }

    async getById(paymentDTO) {
        const payment = await Payment.findById(paymentDTO.id);
        if (!payment) {
            throw new NotFoundError();
        }
        return payment;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate:'rentalId'
        };
        const searchOptions = searchHandler(req);
        const payments = await Payment.find(searchOptions).paginate(options);
        return payments;
    }
}

export default PaymentRepository;
