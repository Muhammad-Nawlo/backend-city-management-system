import PaymentDTO from "../dto/PaymentDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import PaymentService from "../services/PaymentService.js";


const paymentService = new PaymentService();


class PaymentController {
    async all(req, res, next) {
        const payments = await paymentService.all();
        return ResponseHelper.success(res, payments);
    }

    async create(req, res, next) {
        const {rentalId, tenantId, date, amount} = req.body;
        const paymentDTO = new PaymentDTO(rentalId, tenantId, date, amount);
        const newPayment = await paymentService.create(paymentDTO);
        if (!newPayment) {
            return next(res);
        }
        return ResponseHelper.created(res, newPayment);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {rentalId, tenantId, date, amount} = req.body;
        const paymentDTO = new PaymentDTO(rentalId, tenantId, date, amount, id);
        const payment = await paymentService.update(paymentDTO);
        return ResponseHelper.success(res, payment);
    }

    async delete(req, res, next) {
        const paymentDTO = new PaymentDTO();
        paymentDTO.id = req.params.id
        const payment = await paymentService.delete(paymentDTO);

        return ResponseHelper.success(res, payment);
    }

    async get(req, res, next) {
        const paymentDTO = new PaymentDTO();
        paymentDTO.id = req.params.id
        const payment = await paymentService.get(paymentDTO);
        return ResponseHelper.success(res, payment);
    }
}

export default PaymentController;