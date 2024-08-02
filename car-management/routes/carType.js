import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import CarTypeController from "../controllers/CarTypeController.js";
import { carTypeValidation } from "../middlewares/carTypeValidation.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();

const carTypeController = new CarTypeController();

router.get('/', authJWT, catchErrors(carTypeController.all));
router.get('/search', authJWT, catchErrors(carTypeController.all));
router.post('/', authJWT, carTypeValidation, validateRequest, catchErrors(carTypeController.create));
router.put('/:id', authJWT, carTypeValidation, validateRequest, catchErrors(carTypeController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(carTypeController.delete));
router.get('/:id', authJWT, catchErrors(carTypeController.get));

export default router;
