import {body} from 'express-validator';

export const carTypeValidation = [
    body('name').notEmpty().trim().isString(),
    body('description').notEmpty().trim().isString(),

];