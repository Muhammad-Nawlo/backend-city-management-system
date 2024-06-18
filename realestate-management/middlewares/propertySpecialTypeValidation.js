import {body} from 'express-validator';

export const propertySpecialTypeValidation = [
    body('name').isString(),
    body('description').isString(),

];