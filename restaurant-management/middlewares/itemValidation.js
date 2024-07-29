import {body} from 'express-validator';
import existHandler from "../helpers/existHandler.js";
import Category from "../models/Category.js";

export const itemValidation = [
    body('name').notEmpty().trim().isString(),
    body('price').notEmpty().trim().isFloat({min: 0, max: 10000000}),
    body('category').isArray({min:1}),
    body('category.*').custom(value => existHandler(Category, value)),
    body('description').notEmpty().trim().isString(),
];