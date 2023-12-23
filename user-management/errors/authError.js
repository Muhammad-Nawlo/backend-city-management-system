import ApiError from "./ApiError.js";
import {StatusCodes} from "http-status-codes";

class AuthError extends ApiError {
    constructor(message) {
        super(message);
        this.message = 'Credentials is not correct'
        this.statusCode = StatusCodes.NOT_FOUND;
    }
}

export default AuthError;