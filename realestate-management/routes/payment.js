import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import PaymentController from "../controllers/PaymentController.js";
import {paymentValidation} from "../middlewares/paymentValidation.js";

const router = express.Router();


const paymentController = new PaymentController();

router.get('/', catchErrors(paymentController.all));
router.get('/search', catchErrors(paymentController.all));
router.post('/', paymentValidation, validateRequest, catchErrors(paymentController.create));
router.put('/:id', paymentValidation, validateRequest, catchErrors(paymentController.update));
router.delete('/:id',  validateRequest, catchErrors(paymentController.delete));
router.get('/:id', catchErrors(paymentController.get));

export default router;
