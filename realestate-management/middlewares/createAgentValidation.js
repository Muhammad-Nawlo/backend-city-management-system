import {body} from 'express-validator';
import uniquenessHandler from "../helpers/uniquenessHandler.js";
import Agent from "../models/Agent.js";

export const createAgentValidation = [
    body('email').notEmpty().trim().isEmail().custom(value => uniquenessHandler(Agent, {email: value})),
    body('username').notEmpty().trim().isString().custom(value => uniquenessHandler(Agent, {username: value})),
    body('phoneNumber').notEmpty().trim().isMobilePhone().custom(value => uniquenessHandler(Agent, {phoneNumber: value})),
    body('fullName').isString(),
    body('licenseNumber').isString(),
];