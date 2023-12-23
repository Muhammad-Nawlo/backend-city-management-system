import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import UserController from "../controllers/UserController.js";
import { userValidation} from "../middlewares/userValidation.js";
import catchErrors from "../handlers/catchErrors.js";

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
router.post('/', userValidation, validateRequest, catchErrors(userController.create));
router.put('/:id', userValidation, validateRequest, catchErrors(userController.update));
router.delete('/:id',  validateRequest, catchErrors(userController.delete));
router.get('/:id', catchErrors(userController.get));
router.post('/:userId/role/:roleId', catchErrors(userController.assignRole));

export default router;
