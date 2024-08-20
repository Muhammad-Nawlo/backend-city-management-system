import {body} from 'express-validator';

export const saleValidation = [
    body('propertyId').notEmpty().trim().isString(),
    body('buyerId').notEmpty().trim().isString(),
    // body('agentId').notEmpty().trim().isString(),
    body('date').isISO8601().toDate(),
    body('price').isNumeric(),
];