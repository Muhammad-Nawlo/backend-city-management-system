import {body} from 'express-validator';


export const maintenanceRequestValidation = [
    body('propertyId').isString(),
    body('tenantId').isString(),
    body('date').isDate(),
    body('description').isString(),
    body('image').isArray(),
    body('status').isNumeric(),
];