import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import CategoryController from "../controllers/CategoryController.js";
import {categoryValidation} from "../middlewares/categoryValidation.js";

const router = express.Router();


const categoryController = new CategoryController();

router.get('/', catchErrors(categoryController.all));
router.get('/search', catchErrors(categoryController.all));
router.post('/', categoryValidation, validateRequest, catchErrors(categoryController.create));
router.put('/:id', categoryValidation, validateRequest, catchErrors(categoryController.update));
router.delete('/:id', validateRequest, catchErrors(categoryController.delete));
router.get('/:id', catchErrors(categoryController.get));

export default router;
