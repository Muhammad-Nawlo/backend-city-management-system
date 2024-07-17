import {body} from 'express-validator';
import exsistHandler from "../helpers/exsistHandler.js";
import Property from "../models/Property.js";


export const maintenanceRequestValidation = [
    body('propertyId').notEmpty().trim().isString().custom(value => exsistHandler(Property, value)),
    body('tenantId').notEmpty().trim().isString(),
    body('date').notEmpty().trim().isISO8601().toDate(),
    body('description').notEmpty().trim().isString(),
    body('status').notEmpty().isNumeric(),
];