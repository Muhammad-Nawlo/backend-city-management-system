import {body} from 'express-validator';

export const moduleValidation = [
    body('name').isString(),
    body('slug').isSlug()
];