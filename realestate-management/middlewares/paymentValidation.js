import {body} from 'express-validator';

//TODO: make validator for existing id
export const paymentValidation = [
    body('rentalId').isString(),
    body('tenantId').isString(),
    body('date').isISO8601().toDate(),
    body('amount').isNumeric(),
];