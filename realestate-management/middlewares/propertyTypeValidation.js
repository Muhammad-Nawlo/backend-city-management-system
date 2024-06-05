import {body} from 'express-validator';

export const propertyTypeValidation = [
    body('name').isString(),
    body('description').isString(),

];