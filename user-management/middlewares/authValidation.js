import {body} from "express-validator";

export const loginValidation = [
    body('email').isEmail(),
    body('password').isString(),
];

export const registerValidation = [
    body('email').isEmail(),
    body('username').isString(),
    body('phoneNumber').isMobilePhone(),
    body('password').isStrongPassword(),
];

