import {body} from "express-validator";

export const emailValidation = [
    body('sender').isEmail(),
    body('recipient').isEmail(),
    body('subject').isString(),
    body('body').isString()
];