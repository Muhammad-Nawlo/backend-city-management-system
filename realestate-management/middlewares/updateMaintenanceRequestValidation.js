import { body } from 'express-validator';
import existHandler from "../helpers/existHandler.js";
import Property from "../models/Property.js";


export const updateMaintenanceRequestValidation = [

    body('status').notEmpty().custom(value => ['New', 'In Progress', 'In Review', 'Resolved', 'Cancelled', 'Archived'].includes(value)),
];