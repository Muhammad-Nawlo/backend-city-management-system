import {body} from 'express-validator';

export const permissionValidation = [
    body('name').notEmpty().trim().isString(),
    body('slug').notEmpty().trim().isSlug(),
];