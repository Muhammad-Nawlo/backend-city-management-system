import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import {createServiceValidation} from "../middlewares/createServiceValidation.js";
import catchErrors from "../handlers/catchErrors.js";
import {updateServiceValidation} from "../middlewares/updateServiceValidation.js";
import ServiceController from "../controllers/ServiceController.js";

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

router.get('/', catchErrors(serviceController.all));
router.post('/', createServiceValidation, validateRequest, catchErrors(serviceController.create));
router.put('/:id', updateServiceValidation, validateRequest, catchErrors(serviceController.update));
router.delete('/:id', validateRequest, catchErrors(serviceController.delete));
router.get('/:id', catchErrors(serviceController.get));

export default router;
