import {body} from 'express-validator';
import uniquenessHandler from "../helpers/uniquenessHandler.js";
import User from "../models/Order.js";
import existHandler from "../helpers/existHandler.js";
import Restaurant from "../models/Restaurant.js";
import Item from "../models/Item.js";

export const orderValidation = [
    body('note').trim(),
    body('items').isArray({min: 1}),
    body('items.*.item').notEmpty().trim().custom(value => existHandler(Item, value)),
    body('items.*.quantity').isInt({min: 1, max: 500}),
];