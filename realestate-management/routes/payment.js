import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import PaymentController from "../controllers/PaymentController.js";
import { paymentValidation } from "../middlewares/paymentValidation.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();


const paymentController = new PaymentController();

router.get('/', authJWT, catchErrors(paymentController.all));
router.get('/search', authJWT, catchErrors(paymentController.all));
router.post('/', authJWT, paymentValidation, validateRequest, catchErrors(paymentController.create));
router.put('/:id', authJWT, paymentValidation, validateRequest, catchErrors(paymentController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(paymentController.delete));
router.get('/:id', authJWT, catchErrors(paymentController.get));

export default router;
