import {body} from 'express-validator';


export const maintenanceRequestValidation = [
    body('propertyId').isString(),
    body('tenantId').isString(),
    body('date').isISO8601().toDate(),
    body('description').isString(),
    body('status').isNumeric(),
];