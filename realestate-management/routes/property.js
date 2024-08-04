import express from "express";
import validateRequest from "../middlewares/validateRequest.js";

import catchErrors from "../handlers/catchErrors.js";
import PropertyController from "../controllers/PropertyController.js";
import { propertyValidation } from "../middlewares/propertyValidation.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();


const propertyController = new PropertyController();

router.get('/', catchErrors(propertyController.all));
router.get('/user',authJWT, catchErrors(propertyController.propertyUser));
router.get('/search', authJWT, catchErrors(propertyController.all));
router.post('/', authJWT, propertyValidation, validateRequest, catchErrors(propertyController.create));
router.put('/:id', authJWT, propertyValidation, validateRequest, catchErrors(propertyController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(propertyController.delete));
router.get('/:id', authJWT, catchErrors(propertyController.get));


export default router;
