import {body, oneOf} from "express-validator";

export const loginValidation = [
    oneOf([
        body('email').notEmpty().trim().isEmail(),
        body('username').notEmpty().trim().isString(),
        body('phoneNumber').notEmpty().trim().isMobilePhone(),

    ]),
    body('password').notEmpty().trim().isString(),
];

export const registerValidation = [
    body('email').notEmpty().trim().isEmail(),
    body('username').notEmpty().trim().isString(),
    body('phoneNumber').notEmpty().trim().isMobilePhone(),
    body('password').notEmpty().trim().isStrongPassword(),
];

export const forgetPasswordValidation = [
    body('email').notEmpty().trim().isEmail()
];

export const resetPasswordValidation = [
    body('token').notEmpty().trim().isString(),
    body('password').notEmpty().trim().isStrongPassword()
];

