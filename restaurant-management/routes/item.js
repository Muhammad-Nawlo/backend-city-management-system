import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import ItemController from "../controllers/ItemController.js";
import {itemValidation} from "../middlewares/itemValidation.js";

const router = express.Router();

const itemController = new ItemController();

router.get('/', catchErrors(itemController.all));
router.post('/', itemValidation, validateRequest, catchErrors(itemController.create));
router.put('/:id', itemValidation, validateRequest, catchErrors(itemController.update));
router.delete('/:id', validateRequest, catchErrors(itemController.delete));
router.get('/:id', catchErrors(itemController.get));

export default router;
