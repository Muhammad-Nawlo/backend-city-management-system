import {body} from 'express-validator';
import existHandler from "../helpers/existHandler.js";
import PropertyType from "../models/PropertyType.js";

export const propertyValidation = [
    body('address').notEmpty().trim().isString(),
    body('city').notEmpty().trim().isString(),
    body('state').notEmpty().trim().isString(),
    body('zipcode').isNumeric(),
    body('type').exists().custom(value => existHandler(PropertyType, value)),
    body('description').isString(),
    body('status').isFloat({min: 0, max:1000}),
    body('price').isFloat({min: 0, max:1000}),
    body('surfaceArea').isFloat({min: 0, max:1000}),
    body('buildingArea').isFloat({min: 0, max:1000}),
    body('bedrooms').isFloat({min: 0, max:1000}),
    body('bathrooms').isFloat({min: 0, max:1000}),
];