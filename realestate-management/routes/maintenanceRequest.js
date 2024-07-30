import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import MaintenanceRequestController from "../controllers/MaintenanceRequestController.js";
import { maintenanceRequestValidation } from "../middlewares/maintenanceRequestValidation.js";
import { updateMaintenanceRequestValidation } from "../middlewares/updateMaintenanceRequestValidation.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();


const maintenanceController = new MaintenanceRequestController();

router.get('/', authJWT, catchErrors(maintenanceController.all));
router.get('/search', authJWT, catchErrors(maintenanceController.all));
router.post('/', authJWT, maintenanceRequestValidation, validateRequest, catchErrors(maintenanceController.create));
router.put('/:id', authJWT, updateMaintenanceRequestValidation, validateRequest, catchErrors(maintenanceController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(maintenanceController.delete));
router.get('/:id', authJWT, catchErrors(maintenanceController.get));

export default router;
