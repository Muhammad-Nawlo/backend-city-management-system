import { body } from 'express-validator';
import existHandler from "../helpers/existHandler.js";
import Property from "../models/Property.js";


export const maintenanceRequestValidation = [
    body('propertyId').notEmpty().trim().isString().custom(value => existHandler(Property, value)),
    body('tenantId').notEmpty().trim().isString(),
    body('date').notEmpty().trim().isISO8601().toDate(),
    body('description').notEmpty().trim().isString(),
    body('status').notEmpty().custom(value => ['New', 'In Progress', 'In Review', 'Resolved', 'Cancelled', 'Archived'].includes(value)),
];