import express from "express";
import {deleteRoleValidation, roleValidation} from "../middlewares/roleValidation.js";
import validateRequest from "../middlewares/validateRequest.js";
import PermissionController from "../controllers/PermissionController.js";
const router = express.Router();

const permissionController = new PermissionController();

router.get('/', permissionController.all);
router.post('/', roleValidation, validateRequest, permissionController.create);
router.delete('/:id',deleteRoleValidation,validateRequest, permissionController.delete);
router.put('/:id', roleValidation, validateRequest, permissionController.update);
router.get('/:id', permissionController.get);
export default router;
