import {body} from 'express-validator';
import uniquenessHandler from "../helpers/uniquenessHandler.js";
import Service from "../models/Service.js";

export const createServiceValidation = [
    body('name').notEmpty().isString(),
    body('slug').notEmpty().trim().isSlug().custom(value => uniquenessHandler(Service, {slug: value})),
    body('description').notEmpty().isString(),
    body('status').notEmpty().isInt({min: 0, max: 1}),
];