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

        return ResponseHelper.success(res, result);
    }

    async register(req, res, next) {
        const {email, password, phoneNumber, username} = req.body;
        const userDTO = new UserDTO(username, email, phoneNumber, password);
        const result = await authService.register(userDTO);
        return ResponseHelper.created(res, result);

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