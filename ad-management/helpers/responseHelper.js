import { StatusCodes } from "http-status-codes";

export default class ResponseHelper {
    static success(res, data = null, message = 'Success') {
        return res.status(StatusCodes.OK).json({ status: true, message, result: data });
    }

    static created(res, data = null, message = 'Resource created') {
        return res.status(StatusCodes.CREATED).json({ status: true, message, result: data });
    }

    static noContent(res, message = 'No content') {
        return res.status(StatusCodes.NO_CONTENT).json({ status: true, message, result: null });
    }

    static badRequest(res, message = 'Bad request', errors = null) {
        return res.status(StatusCodes.BAD_REQUEST).json({ status: false, message, errors, result: null });
    }

    static unauthorized(res, message = 'Unauthorized') {
        return res.status(StatusCodes.UNAUTHORIZED).json({ status: false, message, result: null });
    }

    static forbidden(res, message = 'Forbidden') {
        return res.status(StatusCodes.FORBIDDEN).json({ status: false, message, result: null });
    }

    static notFound(res, message = 'Not found') {
        return res.status(StatusCodes.NOT_FOUND).json({ status: false, message, result: null });
    }

    static conflict(res, message = 'Conflict', errors = null) {
        return res.status(StatusCodes.CONFLICT).json({ status: false, message, errors, result: null });
    }

    static internalServerError(res, message = 'Internal server error', error = 'Something went wrong') {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ status: false, message, error, result: null });
    }

    static dynamicError(res, statusCode, message) {
        return res.status(statusCode).json({ status: false, message, result: null })
    }

    static dynamicErrorDev(res, statusCode, message, stack) {
        return res.status(statusCode).json({ status: false, message, stack, result: null })
    }
}