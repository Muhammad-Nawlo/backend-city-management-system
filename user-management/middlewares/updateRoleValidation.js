import {body} from 'express-validator';


export const updateRoleValidation = [
    body('name').notEmpty().trim().isString(),
    body('slug').notEmpty().trim().isSlug(),
];