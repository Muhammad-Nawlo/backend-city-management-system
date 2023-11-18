import express from "express";
import ModuleController from "../controllers/ModuleController.js";
import verified from "../middlewares/verified.js";
import authJWT from "../middlewares/authJWT.js";
import {deleteModuleValidation, moduleValidation} from "../middlewares/moduleValidation.js";
import validateRequest from "../middlewares/validateRequest.js";

const router = express.Router();

const moduleController = new ModuleController();

router.get('/', moduleController.all);
router.post('/', moduleValidation, validateRequest, moduleController.create);
router.put('/:id', moduleValidation, validateRequest, moduleController.update);
router.delete('/:id', deleteModuleValidation, validateRequest, moduleController.delete);
router.get('/:id', moduleController.get);

export default router;
