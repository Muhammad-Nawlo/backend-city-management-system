import express from "express";
import AuthController from "../controllers/AuthController.js";
import validateRequest from "../middlewares/validateRequest.js";
import {
    forgetPasswordValidation,
    loginValidation,
    registerValidation,
    resetPasswordValidation
} from "../middlewares/authValidation.js";
import catchErrors from "../handlers/catchErrors.js";

const router = express.Router();

const controller = new AuthController();

router.post('/register', registerValidation, validateRequest, catchErrors(controller.register));

router.post('/login', loginValidation, validateRequest, catchErrors(controller.login));

router.post('/forget-password', forgetPasswordValidation, catchErrors(controller.forgetPassword));

router.post('/reset-password', resetPasswordValidation, catchErrors(controller.resetPassword));

router.get('/verify-email/:id/:token', catchErrors(controller.verifyEmail));

router.post('/verify-email', catchErrors(controller.sendEmailVerification));

// router.post('/logout', catchErrors(controller.logout));

export default router;
