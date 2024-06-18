import {body} from 'express-validator';

export const rentalValidation = [
    body('propertyId').isString(),
    body('tenantId').isString(),
    body('agentId').isString(),
    body('startDate').isISO8601().toDate(),
    body('endDate').isISO8601().toDate(),
    body('monthlyRent').isNumeric(),
];