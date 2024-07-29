import { body } from 'express-validator';
import existHandler from "../helpers/existHandler.js";
import CarType from "../models/CarType.js";

export const carValidation = [
    body('make').notEmpty().trim().isString(),
    body('model').notEmpty().trim().isString(),
    body('year').notEmpty().trim().isString(),
    body('type').notEmpty().trim().isString().custom(value => existHandler(CarType, value)),
    body('capacity').isFloat({ min: 0, max: 50 }),
    body('registrationNumber').isString(),
    body('price').isNumeric(),
    body('status').custom(value => [
        'Available', 'Unavailable', 'In Maintain'
    ].includes(value)),
    body('color').isHexColor(),
];