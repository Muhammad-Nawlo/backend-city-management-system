import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import SaleController from "../controllers/SaleController.js";
import { saleValidation } from "../middlewares/saleValidation.js";

const router = express.Router();

const saleController = new SaleController();

router.get('/', catchErrors(saleController.all));
router.get('/search', catchErrors(saleController.all));
router.post('/', saleValidation, validateRequest, catchErrors(saleController.create));
router.put('/:id', saleValidation, validateRequest, catchErrors(saleController.update));
router.delete('/:id', validateRequest, catchErrors(saleController.delete));
router.get('/:id', catchErrors(saleController.get));

export default router;
