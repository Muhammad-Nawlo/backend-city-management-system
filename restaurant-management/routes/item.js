import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import ItemController from "../controllers/ItemController.js";
import { itemValidation } from "../middlewares/itemValidation.js";
import authJWT from "../helpers/authJWT.js";

const router = express.Router();

const itemController = new ItemController();

router.get('/', authJWT, catchErrors(itemController.all));
router.post('/', authJWT, itemValidation, validateRequest, catchErrors(itemController.create));
router.put('/:id', authJWT, itemValidation, validateRequest, catchErrors(itemController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(itemController.delete));
router.get('/:id', authJWT, catchErrors(itemController.get));

export default router;
