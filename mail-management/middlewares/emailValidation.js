import {body} from "express-validator";

export const emailValidation = [
    body('sender').isEmail(),
    body('recipient').isEmail(),
    body('subject').isString(),
    body('body').isString()
];

export const resetPasswordValidation = [
    body('email').isEmail()
];
export const verificationEmailValidation = [
    body('email').isEmail()
];