import {body} from 'express-validator';

export const agentValidation = [
    body('email').isEmail(),
    body('username').isString(),
    body('phoneNumber').isMobilePhone(),
    body('fullName').isString(),
    body('licenseNumber').isString(),
];