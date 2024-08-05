import {body} from 'express-validator';
import existHandler from "../helpers/existHandler.js";
import PropertyType from "../models/PropertyType.js";
import PropertySpecialType from "../models/PropertySpecialType.js";
import Agent from "../models/Agent.js";

export const propertyValidation = [
    body('address').notEmpty().trim().isString(),
    body('city').notEmpty().trim().isString(),
    body('state').notEmpty().trim().isString(),
    body('zipcode').isNumeric(),
    body('type').exists().custom(value => existHandler(PropertyType, value)),
    body('specialType').exists().custom(value => existHandler(PropertySpecialType, value)),
    body('description').isString(),
    body('status').custom(value => ['Rented', 'Sold', 'Sale', 'Rent'].includes(value)),
    body('price').isFloat({min: 0, max: 100000000}),
    body('surfaceArea').isFloat({min: 0, max: 100000000}),
    body('buildingArea').isFloat({min: 0, max: 100000000}),
    body('bedrooms').isFloat({min: 0, max: 1000}),
    body('bathrooms').isFloat({min: 0, max: 1000}),
    body('agent').exists().custom(value => existHandler(Agent, value))
];