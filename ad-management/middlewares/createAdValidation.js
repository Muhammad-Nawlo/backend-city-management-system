import {body} from 'express-validator';

export const createAdValidation = [
    body('status').notEmpty().isInt({min: 0, max: 1}),
    body('withAuth').notEmpty().isInt({min: 0, max: 1}),
];