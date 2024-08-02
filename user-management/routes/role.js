import express from "express";
import RoleController from "../controllers/RoleController.js";
import validateRequest from "../middlewares/validateRequest.js";
import {updateRoleValidation} from "../middlewares/updateRoleValidation.js";
import catchErrors from "../handlers/catchErrors.js";
import {createRoleValidation} from "../middlewares/createRoleValidation.js";

const router = express.Router();


const roleController = new RoleController();

router.get('/', catchErrors(roleController.all));
router.get('/search', catchErrors(roleController.all));
router.post('/', createRoleValidation, validateRequest, catchErrors(roleController.create));
router.delete('/:id',validateRequest, catchErrors(roleController.delete));
router.put('/:id', updateRoleValidation, validateRequest, catchErrors(roleController.update));
router.get('/:id', catchErrors(roleController.get));
router.post('/:roleId/permission/:permissionId', catchErrors(roleController.assignPermission));

export default router;
