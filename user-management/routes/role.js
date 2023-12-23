import express from "express";
import RoleController from "../controllers/RoleController.js";
import validateRequest from "../middlewares/validateRequest.js";
import { roleValidation} from "../middlewares/roleValidation.js";
import catchErrors from "../handlers/catchErrors.js";

const router = express.Router();


const roleController = new RoleController();

router.get('/', catchErrors(roleController.all));
router.post('/', roleValidation, validateRequest, catchErrors(roleController.create));
router.delete('/:id',validateRequest, catchErrors(roleController.delete));
router.put('/:id', roleValidation, validateRequest, catchErrors(roleController.update));
router.get('/:id', catchErrors(roleController.get));
router.post('/:roleId/permission/:permissionId', catchErrors(roleController.assignPermission));

export default router;
