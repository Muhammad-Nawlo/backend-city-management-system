import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import CarController from "../controllers/CarController.js";
import {carValidation} from "../middlewares/carValidation.js";

const router = express.Router();

const carController = new CarController();

router.get('/', catchErrors(carController.all));
router.get('/search', catchErrors(carController.all));
router.post('/', carValidation, validateRequest, catchErrors(carController.create));
router.put('/:id', carValidation, validateRequest, catchErrors(carController.update));
router.delete('/:id', validateRequest, catchErrors(carController.delete));
router.get('/:id', catchErrors(carController.get));

export default router;
