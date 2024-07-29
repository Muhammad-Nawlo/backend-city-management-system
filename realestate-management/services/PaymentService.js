import PaymentRepository from "../repositories/PaymentRepository.js";

const paymentRepository = new PaymentRepository();

export class PaymentService {
    async create(paymentDTO) {
        const newPayment = await paymentRepository.create(paymentDTO);
        return newPayment;
    }

    async update(paymentDTO) {
        const payment = await paymentRepository.update(paymentDTO);
        return payment;
    }

    async delete(paymentDTO) {
        const payment = await paymentRepository.delete(paymentDTO);
        return payment;
    }

    async get(paymentDTO) {
        const payment = await paymentRepository.getById(paymentDTO);
        return payment;
    }


    async all(req) {
        const payments = await paymentRepository.all(req);
        return payments;
    }


    async getById(paymentDTO) {
        const payment = await paymentRepository.getById(paymentDTO);
        return payment;
    }
}

export default PaymentService;