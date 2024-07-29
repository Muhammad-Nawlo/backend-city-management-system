import {body} from 'express-validator';

export const updateAgentValidation = [
    body('email').notEmpty().trim().isEmail(),
    body('username').notEmpty().trim().isString(),
    body('phoneNumber').isMobilePhone(),
    body('fullName').notEmpty().trim().isString(),
    body('licenseNumber').notEmpty().trim().isString(),
];