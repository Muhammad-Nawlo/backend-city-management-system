import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import UserController from "../controllers/UserController.js";
import {createUserValidation} from "../middlewares/createUserValidation.js";
import catchErrors from "../handlers/catchErrors.js";
import Uploads from "../middlewares/multerConfig.js";
import {updateUserValidation} from "../middlewares/updateUserValidation.js";

const router = express.Router();

// const userController = new UserController();

/*
    get  / get all users
    get /:id get a user
    post / create a user
    put / update a user
    delete /:id update a user

 */
const userController = new UserController();

router.get('/', catchErrors(userController.all));
router.post('/', createUserValidation, validateRequest, catchErrors(userController.create));
router.put('/:id', updateUserValidation, validateRequest, catchErrors(userController.update));
router.delete('/:id', validateRequest, catchErrors(userController.delete));
router.get('/:id', catchErrors(userController.get));
router.post('/:userId/role/:roleId', catchErrors(userController.assignRole));

export default router;
