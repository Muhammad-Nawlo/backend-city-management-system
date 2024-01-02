import express from "express";
import catchErrors from "../handlers/catchErrors.js";
import EmailController from "../controllers/EmailController.js";
import {emailValidation, resetPasswordValidation, verificationEmailValidation} from "../middlewares/emailValidation.js";
import validateRequest from "../middlewares/validateRequest.js";

const router = express.Router();


/*
    get  / get all emails
    get /:id get a email
    post / create a email
    delete /:id update a email

 */
const emailController = new EmailController();

router.get('/', catchErrors(emailController.all));
router.post('/', emailValidation, catchErrors(emailController.create));
router.post('/reset-password', resetPasswordValidation, validateRequest, catchErrors(emailController.resetPassword));
router.post('/email-verify', verificationEmailValidation, validateRequest, catchErrors(emailController.verificationEmail));
router.delete('/:id', catchErrors(emailController.delete));
router.get('/:id', catchErrors(emailController.get));

export default router;