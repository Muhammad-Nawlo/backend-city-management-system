import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import OrderController from "../controllers/OrderController.js";
import { orderValidation } from "../middlewares/orderValidation.js";
import { updateOrderValidation } from "../middlewares/updateOrderValidation.js";
import authJWT from "../helpers/authJWT.js";

const router = express.Router();


const orderController = new OrderController();

router.get('/', authJWT, catchErrors(orderController.all));
router.post('/', authJWT, orderValidation, validateRequest, catchErrors(orderController.create));
router.put('/:id', authJWT, updateOrderValidation, validateRequest, catchErrors(orderController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(orderController.delete));
router.get('/:id', authJWT, catchErrors(orderController.get));

export default router;
