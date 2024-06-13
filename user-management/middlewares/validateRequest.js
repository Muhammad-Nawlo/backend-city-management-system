import {validationResult} from "express-validator";
import ResponseHelper from "../helpers/responseHelper.js";

const validateRequest = (req, res, next) => {
    console.log(req)
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return ResponseHelper.badRequest(res, 'Bad request', errors.array());
    }
    next();
}

export default validateRequest;
