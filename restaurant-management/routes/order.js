import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import OrderController from "../controllers/OrderController.js";
import {orderValidation} from "../middlewares/orderValidation.js";

const router = express.Router();


const orderController = new OrderController();

router.get('/', catchErrors(orderController.all));
router.post('/', orderValidation, validateRequest, catchErrors(orderController.create));
router.put('/:id', orderValidation, validateRequest, catchErrors(orderController.update));
router.delete('/:id', validateRequest, catchErrors(orderController.delete));
router.get('/:id', catchErrors(orderController.get));

export default router;
