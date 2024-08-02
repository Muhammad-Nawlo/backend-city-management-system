import {StatusCodes} from "http-status-codes";
import ApiError from "./ApiError.js";

class NotFoundError extends ApiError {
    constructor(message) {
        super(message);
        this.message = 'Model is not found'
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

export default NotFoundError;