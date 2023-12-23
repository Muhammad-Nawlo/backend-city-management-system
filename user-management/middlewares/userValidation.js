import {body} from 'express-validator';

export const userValidation = [
    body('email').isEmail(),
    body('username').isString(),
    body('phoneNumber').isMobilePhone(),
    body('password').isStrongPassword(),
];