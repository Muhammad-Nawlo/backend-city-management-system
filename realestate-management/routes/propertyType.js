import express from "express";
import validateRequest from "../middlewares/validateRequest.js";

import catchErrors from "../handlers/catchErrors.js";
import PropertyTypeController from "../controllers/PropertyTypeController.js";
import { propertyTypeValidation } from "../middlewares/propertyTypeValidation.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();


const propertyTypeController = new PropertyTypeController();

router.get('/', authJWT, catchErrors(propertyTypeController.all));
router.get('/search', authJWT, catchErrors(propertyTypeController.all));
router.post('/', authJWT, propertyTypeValidation, validateRequest, catchErrors(propertyTypeController.create));
router.put('/:id', authJWT, propertyTypeValidation, validateRequest, catchErrors(propertyTypeController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(propertyTypeController.delete));
router.get('/:id', authJWT, catchErrors(propertyTypeController.get));


export default router;
