import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import RentalController from "../controllers/RentalController.js";
import {rentalValidation} from "../middlewares/rentalValidation.js";

const router = express.Router();

const rentalController = new RentalController();

router.get('/', catchErrors(rentalController.all));
router.post('/', rentalValidation, validateRequest, catchErrors(rentalController.create));
router.put('/:id', rentalValidation, validateRequest, catchErrors(rentalController.update));
router.delete('/:id', validateRequest, catchErrors(rentalController.delete));
router.get('/:id', catchErrors(rentalController.get));

export default router;
