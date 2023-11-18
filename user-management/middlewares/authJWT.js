import jwt from "jsonwebtoken";
import config from "../config/config.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UserRepository from "../repositories/userRepository.js";
import User from "../models/User.js";


const userRepository = new UserRepository();

const authJWT = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return ResponseHelper.unauthorized(res);
    }
    jwt.verify(token, config.jwtSecret,async (err, decoded) => {
        if (err) {
            return ResponseHelper.unauthorized(res);
        }
        req.user = User.findById(decoded);
        next();
    });
}

export default authJWT;