import {body} from 'express-validator';

export const permissionValidation = [
    body('name').isString(),
    body('slug').isSlug(),
];
export const deletePermissionValidation = [
];