import {body} from 'express-validator';

export const updateServiceValidation = [
    body('name').notEmpty().isString(),
    body('slug').notEmpty().trim().isSlug(),
    body('description').notEmpty().isString(),
    body('status').custom(value => ['Available', 'Unavailable'].includes(value)),

];