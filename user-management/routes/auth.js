import express from "express";
import AuthController from "../controllers/AuthController.js";
import validateRequest from "../middlewares/validateRequest.js";
import {loginValidation, registerValidation} from "../middlewares/authValidation.js";
import catchErrors from "../handlers/catchErrors.js";

const router = express.Router();

const controller = new AuthController();

router.post('/register', registerValidation, validateRequest, catchErrors(controller.register));

router.post('/login', loginValidation, validateRequest, catchErrors(controller.login));

router.post('/forget-password', catchErrors(controller.forgetPassword));

router.post('/reset-password', catchErrors(controller.resetPassword));

router.get('/verify-email/:id/:hash', catchErrors(controller.verifyEmail));

router.post('/email/verification-notification', catchErrors(controller.sendEmailVerification));

router.post('/logout', catchErrors(controller.logout));

export default router;
