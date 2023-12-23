import {StatusCodes} from "http-status-codes";

export default class ResponseHelper {
    static success(res, data = null, message = 'Success') {
        return res.status(StatusCodes.OK).json({status: 'success', message, data});
    }

    static created(res, data = null, message = 'Resource created') {
        return res.status(StatusCodes.CREATED).json({status: 'created', message, data});
    }

    static noContent(res, message = 'No content') {
        return res.status(StatusCodes.NO_CONTENT).json({status: 'no_content', message});
    }

    static badRequest(res, message = 'Bad request', errors = null) {
        return res.status(StatusCodes.BAD_REQUEST).json({status: 'bad_request', message, errors});
    }

    static unauthorized(res, message = 'Unauthorized') {
        return res.status(StatusCodes.UNAUTHORIZED).json({status: 'unauthorized', message});
    }

    static forbidden(res, message = 'Forbidden') {
        return res.status(StatusCodes.FORBIDDEN).json({status: 'forbidden', message});
    }

    static notFound(res, message = 'Not found') {
        return res.status(StatusCodes.NOT_FOUND).json({status: 'not_found', message});
    }

    static conflict(res, message = 'Conflict', errors = null) {
        return res.status(StatusCodes.CONFLICT).json({status: 'conflict', message, errors});
    }

    static internalServerError(res, message = 'Internal server error', error = 'Something went wrong') {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({status: 'internal_server_error', message, error});
    }

    static dynamicError(res, statusCode, message) {
        return res.status(statusCode).json({status: 'error', message})
    }

    static dynamicErrorDev(res, statusCode, message, stack) {
        return res.status(statusCode).json({status: 'error', message, stack})
    }
}