import {body} from 'express-validator';

export const rentalValidation = [
    body('propertyId').notEmpty().trim().isString(),
    body('tenantId').notEmpty().trim().isString(),
    body('startDate').isISO8601().toDate(),
    body('endDate').isISO8601().toDate(),
    body('monthlyRent').isNumeric(),
];