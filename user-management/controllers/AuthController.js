import {AuthService} from "../services/AuthService.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UserDTO from "../dto/UserDTO.js";

const authService = new AuthService();

export default class AuthController {
    constructor() {
    }

    async login(req, res, next) {
        const {email, phoneNumber, username, password} = req.body;
        const userDTO = new UserDTO(username, email, phoneNumber, password);
        const result = await authService.login(userDTO);
        if (!result) {
            throw new Error('Credentials are not correct');
        }
        return ResponseHelper.success(res, result);
    }

    async register(req, res, next) {
        const {email, password, phoneNumber, username} = req.body;
        const userDTO = new UserDTO(username, email, phoneNumber, password);
        try {
            const result = await authService.register(userDTO);
            return ResponseHelper.created(res, result);
        } catch (error) {
            ResponseHelper.internalServerError(res, error.message)
        }
    }

    forgetPassword() {

    }

    resetPassword() {

    }

    verifyEmail() {

    }

    sendEmailVerification() {

    }

    logout() {

    }
}