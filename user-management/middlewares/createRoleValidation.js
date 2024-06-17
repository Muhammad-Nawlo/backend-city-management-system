import {body} from 'express-validator';
import uniquenessHandler from "../helpers/uniquenessHandler.js";
import Role from "../models/Role.js";

export const createRoleValidation = [
    body('name').notEmpty().trim().isString(),
    body('slug').notEmpty().trim().isSlug().custom(value => uniquenessHandler(Role, {slug: value})),
];