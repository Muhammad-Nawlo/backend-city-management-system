import express from "express";
import validateRequest from "../middlewares/validateRequest.js";

import catchErrors from "../handlers/catchErrors.js";
import PropertyController from "../controllers/PropertyController.js";
import {propertyValidation} from "../middlewares/propertyValidation.js";

const router = express.Router();


const propertyController = new PropertyController();

router.get('/', catchErrors(propertyController.all));
router.get('/search', catchErrors(propertyController.all));
router.post('/', propertyValidation, validateRequest, catchErrors(propertyController.create));
router.put('/:id', propertyValidation, validateRequest, catchErrors(propertyController.update));
router.delete('/:id', validateRequest, catchErrors(propertyController.delete));
router.get('/:id', catchErrors(propertyController.get));


export default router;
