import {body} from 'express-validator';
import existHandler from "../helpers/existHandler.js";
import Car from "../models/Car.js";

export const rentalValidation = [
    body('carId').notEmpty().trim().isString().custom((value) => existHandler(Car, value)),
    body('userId').notEmpty().trim().isString(),
    body('startDate').isISO8601().toDate(),
    body('endDate').isISO8601().toDate(),
    body('location').notEmpty().trim().isString(),
];