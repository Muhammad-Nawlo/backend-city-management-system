import {body} from 'express-validator';

export const saleValidation = [
    body('propertyId').isString(),
    body('buyerId').isString(),
    body('agentId').isString(),
    body('date').isDate(),
    body('price').isNumeric(),
];