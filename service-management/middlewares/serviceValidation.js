import {body} from 'express-validator';

export const serviceValidation = [
    body('name').isString(),
    body('slug').isSlug()
];