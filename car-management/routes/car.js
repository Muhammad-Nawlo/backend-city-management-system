import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import CarController from "../controllers/CarController.js";
import {carValidation} from "../middlewares/carValidation.js";
import authJWT from "../middlewares/authJWT.js";
import {carStatusValidation} from "../middlewares/statusValidation.js";

const router = express.Router();

const carController = new CarController();

router.get('/', authJWT, catchErrors(carController.all));
router.get('/search', authJWT, catchErrors(carController.all));
router.post('/status/:id', authJWT, carStatusValidation, catchErrors(carController.changeStatus));
router.post('/', authJWT, carValidation, validateRequest, catchErrors(carController.create));
router.put('/:id', authJWT, carValidation, validateRequest, catchErrors(carController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(carController.delete));
router.get('/:id', authJWT, catchErrors(carController.get));

export default router;
