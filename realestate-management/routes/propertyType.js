import express from "express";
import validateRequest from "../middlewares/validateRequest.js";

import catchErrors from "../handlers/catchErrors.js";
import PropertyTypeController from "../controllers/PropertyTypeController.js";
import {propertyTypeValidation} from "../middlewares/propertyTypeValidation.js";

const router = express.Router();


const propertyTypeController = new PropertyTypeController();

router.get('/', catchErrors(propertyTypeController.all));
router.get('/search', catchErrors(propertyTypeController.all));
router.post('/', propertyTypeValidation, validateRequest, catchErrors(propertyTypeController.create));
router.put('/:id', propertyTypeValidation, validateRequest, catchErrors(propertyTypeController.update));
router.delete('/:id', validateRequest, catchErrors(propertyTypeController.delete));
router.get('/:id', catchErrors(propertyTypeController.get));


export default router;
