import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import AdController from "../controllers/AdController.js";
import authJWT from "../middlewares/authJWT.js";
import {createAdValidation} from "../middlewares/createAdValidation.js";
import {updateAdValidation} from "../middlewares/updateAdValidation.js";

const router = express.Router();

// const serviceController = new UserController();

/*
    get  / get all ads
    get /:id get a ads
    post / create a ads
    put / update a ads
    delete /:id update a ads

 */
const adController = new AdController();

router.get('/', catchErrors(adController.all));
router.get('/search', authJWT, catchErrors(adController.all));
router.post('/', authJWT, createAdValidation, validateRequest, catchErrors(adController.create));
router.put('/:id', authJWT, updateAdValidation, validateRequest, catchErrors(adController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(adController.delete));
router.get('/:id', authJWT, catchErrors(adController.get));

export default router;
