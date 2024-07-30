import {body} from 'express-validator';
import existHandler from '../helpers/existHandler.js';
import Role from '../models/Role.js';

export const updateUserValidation = [
    body('email').notEmpty().trim().isEmail(),
    body('username').notEmpty().trim().isString(),
    body('phoneNumber').notEmpty().trim().isMobilePhone(),
    body('role').notEmpty().trim().custom((value) => existHandler(Role, value)),
];