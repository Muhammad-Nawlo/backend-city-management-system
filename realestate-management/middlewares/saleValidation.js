import {body} from 'express-validator';

export const saleValidation = [
    body('propertyId').isString(),
    body('buyerId').isString(),
    body('agentId').isString(),
    body('date').isISO8601().toDate(),
    body('price').isNumeric(),
];