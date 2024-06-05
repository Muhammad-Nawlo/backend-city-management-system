import {body} from 'express-validator';

export const propertyValidation = [
    body('address').isString(),
    body('city').isString(),
    body('state').isString(),
    body('zipcode').isNumeric(),
    body('type').isString(),
    body('description').isString(),
    body('status').isNumeric(),
    body('price').isNumeric(),
    body('surfaceArea').isNumeric(),
    body('buildingArea').isNumeric(),
    body('bedrooms').isNumeric(),
    body('bathrooms').isNumeric(),
    body('images').isArray(),
];