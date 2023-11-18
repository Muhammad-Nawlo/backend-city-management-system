import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import UserController from "../controllers/UserController.js";
import {deleteUserValidation, userValidation} from "../middlewares/userValidation.js";

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

router.get('/', userController.all);
router.post('/', userValidation, validateRequest, userController.create);
router.put('/:id', userValidation, validateRequest, userController.update);
router.delete('/:id', deleteUserValidation, validateRequest, userController.delete);
router.get('/:id', userController.get);

export default router;
