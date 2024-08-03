import {body} from 'express-validator';

export const createAdValidation = [
    body('status').custom(value => ['Available', 'Unavailable'].includes(value)),
    body('withAuth').notEmpty().trim().isString(),
    body('link').notEmpty().trim().isString(),
];