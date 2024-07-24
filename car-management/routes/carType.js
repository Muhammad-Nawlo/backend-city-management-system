import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import CarTypeController from "../controllers/CarTypeController.js";
import {carTypeValidation} from "../middlewares/carTypeValidation.js";

const router = express.Router();

const carTypeController = new CarTypeController();

router.get('/', catchErrors(carTypeController.all));
router.post('/', carTypeValidation, validateRequest, catchErrors(carTypeController.create));
router.put('/:id', carTypeValidation, validateRequest, catchErrors(carTypeController.update));
router.delete('/:id', validateRequest, catchErrors(carTypeController.delete));
router.get('/:id', catchErrors(carTypeController.get));

export default router;
