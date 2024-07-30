import express from "express";
import validateRequest from "../middlewares/validateRequest.js";

import catchErrors from "../handlers/catchErrors.js";
import PropertySpecialTypeController from "../controllers/PropertySpecialTypeController.js";
import {propertySpecialTypeValidation} from "../middlewares/propertySpecialTypeValidation.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();


const propertySpecialTypeController = new PropertySpecialTypeController();

router.get('/',authJWT, catchErrors(propertySpecialTypeController.all));
router.get('/search',authJWT, catchErrors(propertySpecialTypeController.all));
router.post('/',authJWT, propertySpecialTypeValidation, validateRequest, catchErrors(propertySpecialTypeController.create));
router.put('/:id',authJWT, propertySpecialTypeValidation, validateRequest, catchErrors(propertySpecialTypeController.update));
router.delete('/:id',authJWT, validateRequest, catchErrors(propertySpecialTypeController.delete));
router.get('/:id',authJWT, catchErrors(propertySpecialTypeController.get));


export default router;
