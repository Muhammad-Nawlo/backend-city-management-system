import express from "express";
import ServiceController from "../controllers/ServiceController.js";
import verified from "../middlewares/verified.js";
import authJWT from "../middlewares/authJWT.js";
import { serviceValidation} from "../middlewares/serviceValidation.js";
import catchErrors from "../handlers/catchErrors.js";
import validateRequest from "../middlewares/validateRequest.js";

const router = express.Router();

const moduleController = new ServiceController();

router.get('/', catchErrors(moduleController.all));
router.post('/', serviceValidation, validateRequest, catchErrors(moduleController.create));
router.put('/:id', serviceValidation, validateRequest, catchErrors(moduleController.update));
router.delete('/:id', validateRequest, catchErrors(moduleController.delete));
router.get('/:id', catchErrors(moduleController.get));

export default router;
