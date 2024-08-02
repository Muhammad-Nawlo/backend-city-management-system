import {StatusCodes} from "http-status-codes";
import ApiError from "../errors/ApiError.js";
import ResponseHelper from "../helpers/responseHelper.js";
import config from "../config/config.js";

const errorHandlerMiddleware = (err, req, res, next) => {

    let customError = {
        statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
        msg: err.message || 'Something went wrong, try again later'
    }

    if (err instanceof ApiError) {
        return ResponseHelper.dynamicError(res, err.statusCode, err.message)
    }

    if (err.name === 'ValidationError') {
        customError.msg = Object.values(err.errors).map((item) => item.message).join(',')
        customError.statusCode = StatusCodes.BAD_REQUEST
    }

    if (err.code && err.code === 11000) {
        customError.msg = `Duplicate value entered for ${Object.keys(err.keyValue)} field, please choose another value`
        customError.statusCode = StatusCodes.BAD_REQUEST
    }

    if (err.name === 'CastError') {
        customError.msg = `No item found with id: ${err.value}`
        customError.statusCode = StatusCodes.NOT_FOUND
    }


    if (config.env === 'development') {
        err.stack = err.stack || '';
        const stackHighlighted = err.stack.replace(/[a-z_-\d]+.js:\d+:\d+/gi, '<mark>$&</mark>');
        return ResponseHelper.dynamicErrorDev(res, customError.statusCode, customError.msg, stackHighlighted);
    } else {
        return ResponseHelper.dynamicError(res, customError.statusCode, customError.msg)
    }
}
export default errorHandlerMiddleware
