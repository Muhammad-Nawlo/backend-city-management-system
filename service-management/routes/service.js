import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import { createServiceValidation } from "../middlewares/createServiceValidation.js";
import catchErrors from "../handlers/catchErrors.js";
import { updateServiceValidation } from "../middlewares/updateServiceValidation.js";
import ServiceController from "../controllers/ServiceController.js";
import authJWT from "../middlewares/authJWT.js";

const router = express.Router();

// const serviceController = new UserController();

/*
    get  / get all services
    get /:id get a service
    post / create a service
    put / update a service
    delete /:id update a service

 */
const serviceController = new ServiceController();

router.get('/', authJWT, catchErrors(serviceController.all));
router.get('/search', authJWT, catchErrors(serviceController.all));
router.post('/', authJWT, createServiceValidation, validateRequest, catchErrors(serviceController.create));
router.put('/:id', authJWT, updateServiceValidation, validateRequest, catchErrors(serviceController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(serviceController.delete));
router.get('/:id', authJWT, catchErrors(serviceController.get));

export default router;
