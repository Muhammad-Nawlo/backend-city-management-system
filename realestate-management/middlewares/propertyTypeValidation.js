import {body} from 'express-validator';

export const propertyTypeValidation = [
    body('name').notEmpty().trim().isString(),
    body('description').notEmpty().trim().isString(),

];