import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import CategoryController from "../controllers/CategoryController.js";
import {categoryValidation} from "../middlewares/categoryValidation.js";
import authJWT from "../helpers/authJWT.js";

const router = express.Router();


const categoryController = new CategoryController();

router.get('/', authJWT,catchErrors(categoryController.all));
router.get('/search', authJWT,catchErrors(categoryController.all));
router.post('/', authJWT,categoryValidation, validateRequest, catchErrors(categoryController.create));
router.put('/:id', authJWT,categoryValidation, validateRequest, catchErrors(categoryController.update));
router.delete('/:id', authJWT,validateRequest, catchErrors(categoryController.delete));
router.get('/:id', authJWT,catchErrors(categoryController.get));

export default router;
