import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import PermissionController from "../controllers/PermissionController.js";
import catchErrors from "../handlers/catchErrors.js";
import {updateRoleValidation} from "../middlewares/updateRoleValidation.js";
import {createRoleValidation} from "../middlewares/createRoleValidation.js";

const router = express.Router();

const permissionController = new PermissionController();

router.get('/', catchErrors(permissionController.all));
router.post('/', createRoleValidation, validateRequest, catchErrors(permissionController.create));
router.delete('/:id', validateRequest, catchErrors(permissionController.delete));
router.put('/:id', updateRoleValidation, validateRequest, catchErrors(permissionController.update));
router.get('/:id', catchErrors(permissionController.get));
export default router;
