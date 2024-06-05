import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import MaintenanceRequestController from "../controllers/MaintenanceRequestController.js";
import {maintenanceRequestValidation} from "../middlewares/maintenanceRequestValidation.js";

const router = express.Router();


const maintenanceController = new MaintenanceRequestController();

router.get('/', catchErrors(maintenanceController.all));
router.post('/', maintenanceRequestValidation, validateRequest, catchErrors(maintenanceController.create));
router.put('/:id', maintenanceRequestValidation, validateRequest, catchErrors(maintenanceController.update));
router.delete('/:id', validateRequest, catchErrors(maintenanceController.delete));
router.get('/:id', catchErrors(maintenanceController.get));

export default router;
