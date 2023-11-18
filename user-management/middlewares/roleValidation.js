import {body} from 'express-validator';

export const roleValidation = [
    body('name').isString(),
    body('slug').isSlug(),
];
export const deleteRoleValidation = [
];