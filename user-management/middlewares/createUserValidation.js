import {body} from 'express-validator';
import uniquenessHandler from "../helpers/uniquenessHandler.js";
import User from "../models/User.js";

export const createUserValidation = [
    body('email').notEmpty().trim().isEmail().custom(value => uniquenessHandler(User, {email: value})),
    body('username').notEmpty().trim().isString().custom(value => uniquenessHandler(User, {username: value})),
    body('phoneNumber').notEmpty().trim().isMobilePhone().custom(value => uniquenessHandler(User, {phoneNumber: value})),
    body('password').notEmpty().trim().isStrongPassword(),
];