import express from "express";
import RoleController from "../controllers/RoleController.js";
import validateRequest from "../middlewares/validateRequest.js";
import {deleteRoleValidation, roleValidation} from "../middlewares/roleValidation.js";
const router = express.Router();


const roleController = new RoleController();

router.get('/', roleController.all);
router.post('/', roleValidation, validateRequest, roleController.create);
router.delete('/:id',deleteRoleValidation,validateRequest, roleController.delete);
router.put('/:id', roleValidation, validateRequest, roleController.update);
router.get('/:id', roleController.get);

export default router;
