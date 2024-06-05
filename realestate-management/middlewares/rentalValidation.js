import {body} from 'express-validator';

export const rentalValidation = [
    body('propertyId').isString(),
    body('tenantId').isString(),
    body('agentId').isString(),
    body('startDate').isDate(),
    body('endDate').isDate(),
    body('monthlyRent').isNumeric(),
];