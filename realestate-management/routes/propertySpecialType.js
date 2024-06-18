import express from "express";
import validateRequest from "../middlewares/validateRequest.js";

import catchErrors from "../handlers/catchErrors.js";
import PropertySpecialTypeController from "../controllers/PropertySpecialTypeController.js";
import {propertySpecialTypeValidation} from "../middlewares/propertySpecialTypeValidation.js";

const router = express.Router();


const propertySpecialTypeController = new PropertySpecialTypeController();

router.get('/', catchErrors(propertySpecialTypeController.all));
router.post('/', propertySpecialTypeValidation, validateRequest, catchErrors(propertySpecialTypeController.create));
router.put('/:id', propertySpecialTypeValidation, validateRequest, catchErrors(propertySpecialTypeController.update));
router.delete('/:id', validateRequest, catchErrors(propertySpecialTypeController.delete));
router.get('/:id', catchErrors(propertySpecialTypeController.get));


export default router;
