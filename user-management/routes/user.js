import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import UserController from "../controllers/UserController.js";
import { createUserValidation } from "../middlewares/createUserValidation.js";
import catchErrors from "../handlers/catchErrors.js";
import Uploads from "../middlewares/multerConfig.js";
import { updateUserValidation } from "../middlewares/updateUserValidation.js";
import authJWT from "../middlewares/authJWT.js";

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

router.get('/', authJWT, catchErrors(userController.all));
router.get('/search', authJWT, catchErrors(userController.all));
router.post('/', authJWT, createUserValidation, validateRequest, catchErrors(userController.create));
router.put('/:id', authJWT, updateUserValidation, validateRequest, catchErrors(userController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(userController.delete));
router.get('/:id', authJWT, catchErrors(userController.get));
router.post('/:id', authJWT, catchErrors(userController.get));

export default router;
