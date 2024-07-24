import ApiError from "./ApiError.js";

class NotFoundError extends ApiError {
    constructor(message) {
        super(message);
        this.message = 'Model is not found'
        this.statusCode = 404;
    }
}

export default NotFoundError;