import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import SaleController from "../controllers/SaleController.js";
import { saleValidation } from "../middlewares/saleValidation.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();

const saleController = new SaleController();

router.get('/', authJWT, catchErrors(saleController.all));
router.get('/search', authJWT, catchErrors(saleController.all));
router.post('/', authJWT, saleValidation, validateRequest, catchErrors(saleController.create));
router.put('/:id', authJWT, saleValidation, validateRequest, catchErrors(saleController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(saleController.delete));
router.get('/:id', authJWT, catchErrors(saleController.get));

export default router;
