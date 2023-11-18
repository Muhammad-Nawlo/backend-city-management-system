export default class ResponseHelper {
    static success(res, data = null, message = 'Success') {
        return res.status(200).json({status: 'success', message, data});
    }

    static created(res, data = null, message = 'Resource created') {
        return res.status(201).json({status: 'created', message, data});
    }

    static noContent(res, message = 'No content') {
        return res.status(204).json({status: 'no_content', message});
    }

    static badRequest(res, message = 'Bad request', errors = null) {
        return res.status(400).json({status: 'bad_request', message, errors});
    }

    static unauthorized(res, message = 'Unauthorized') {
        return res.status(401).json({status: 'unauthorized', message});
    }

    static forbidden(res, message = 'Forbidden') {
        return res.status(403).json({status: 'forbidden', message});
    }

    static notFound(res, message = 'Not found') {
        return res.status(404).json({status: 'not_found', message});
    }

    static conflict(res, message = 'Conflict', errors = null) {
        return res.status(409).json({status: 'conflict', message, errors});
    }

    static internalServerError(res, message = 'Internal server error') {
        return res.status(500).json({status: 'internal_server_error', message});
    }
}