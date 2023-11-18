import express from "express";
import AuthController from "../controllers/AuthController.js";
import validateRequest from "../middlewares/validateRequest.js";
import {loginValidation, registerValidation} from "../middlewares/authValidation.js";

const router = express.Router();

const controller = new AuthController();

router.post('/register', registerValidation, validateRequest,await controller.register);

router.post('/login', loginValidation, validateRequest, controller.login);

router.post('/forget-password', controller.forgetPassword);

router.post('/reset-password', controller.resetPassword);

router.get('/verify-email/:id/:hash', controller.verifyEmail);

router.post('/email/verification-notification', controller.sendEmailVerification);

router.post('/logout', controller.logout);

export default router;
