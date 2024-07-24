import {body} from 'express-validator';

export const propertySpecialTypeValidation = [
    body('name').notEmpty().trim().isString(),
    body('description').notEmpty().trim().isString(),

];