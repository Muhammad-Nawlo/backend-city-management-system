import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import RentalController from "../controllers/RentalController.js";
import { rentalValidation } from "../middlewares/rentalValidation.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();

const rentalController = new RentalController();

router.get('/', authJWT, catchErrors(rentalController.all));
router.get('/search', authJWT, catchErrors(rentalController.all));
router.post('/', authJWT, rentalValidation, validateRequest, catchErrors(rentalController.create));
router.put('/:id', authJWT, rentalValidation, validateRequest, catchErrors(rentalController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(rentalController.delete));
router.get('/:id', authJWT, catchErrors(rentalController.get));

export default router;
