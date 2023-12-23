import express from "express";
import { roleValidation} from "../middlewares/roleValidation.js";
import validateRequest from "../middlewares/validateRequest.js";
import PermissionController from "../controllers/PermissionController.js";
import catchErrors from "../handlers/catchErrors.js";

const router = express.Router();

const permissionController = new PermissionController();

router.get('/', catchErrors(permissionController.all));
router.post('/', roleValidation, validateRequest, catchErrors(permissionController.create));
router.delete('/:id', validateRequest, catchErrors(permissionController.delete));
router.put('/:id', roleValidation, validateRequest, catchErrors(permissionController.update));
router.get('/:id', catchErrors(permissionController.get));
export default router;
