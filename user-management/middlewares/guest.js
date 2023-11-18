import ResponseHelper from "../helpers/responseHelper.js";

const guest = (req, res, next) => {
    const token = req.headers['authorization'];
    if (!token) {
        return ResponseHelper.forbidden(res, 'Authenticated users are not allowed')
    }
    next();
}