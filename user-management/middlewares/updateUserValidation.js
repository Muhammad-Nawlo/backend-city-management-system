import {body} from 'express-validator';
import uniquenessHandler from "../helpers/uniquenessHandler.js";
import User from "../models/User.js";

export const updateUserValidation = [
    body('email').notEmpty().trim().isEmail(),
    body('username').notEmpty().trim().isString(),
    body('phoneNumber').notEmpty().trim().isMobilePhone(),
    body('password').notEmpty().trim().isStrongPassword(),
];