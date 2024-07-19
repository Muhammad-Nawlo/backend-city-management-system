import {body} from 'express-validator';
import uniquenessHandler from "../helpers/uniquenessHandler.js";
import User from "../models/Order.js";
import existHandler from "../helpers/existHandler.js";
import Restaurant from "../models/Restaurant.js";

export const restaurantValidation = [
    body('name').notEmpty().trim().isString(),
    body('description').notEmpty().trim().isString(),
    body('phoneNumber').notEmpty().trim().isString(),
    body('address').notEmpty().trim().isString(),
];