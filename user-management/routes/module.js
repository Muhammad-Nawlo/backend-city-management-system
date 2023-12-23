import express from "express";
import ModuleController from "../controllers/ModuleController.js";
import verified from "../middlewares/verified.js";
import authJWT from "../middlewares/authJWT.js";
import { moduleValidation} from "../middlewares/moduleValidation.js";
import catchErrors from "../handlers/catchErrors.js";
import validateRequest from "../middlewares/validateRequest.js";

const router = express.Router();

const moduleController = new ModuleController();

router.get('/', catchErrors(moduleController.all));
router.post('/', moduleValidation, validateRequest, catchErrors(moduleController.create));
router.put('/:id', moduleValidation, validateRequest, catchErrors(moduleController.update));
router.delete('/:id', validateRequest, catchErrors(moduleController.delete));
router.get('/:id', catchErrors(moduleController.get));

export default router;
