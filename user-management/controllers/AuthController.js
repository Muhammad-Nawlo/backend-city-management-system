import {AuthService} from "../services/AuthService.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UserDTO from "../dto/UserDTO.js";
import UserService from "../services/UserService.js";
import ApiError from "../errors/ApiError.js";

const authService = new AuthService();
const userService = new UserService();

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

    async forgetPassword(req, res, next) {
        const {email} = req.body;
        const userDTO = new UserDTO();
        userDTO.email = email;

        const user = await userService.getByEmail(userDTO);
        user.generateResetToken();
        const result = await user.save();
        /*
        @todo send email
         */

        return ResponseHelper.success(res, null, 'Check your email');
    }

    async resetPassword(req, res, next) {
        const {token, password} = req.body;
        const user = await userService.getByToken(token);

        user.setPassword(password)
        user.resetPasswordToken = null;
        user.resetPasswordExpires = null;
        const result = await user.save();
        ResponseHelper.success(res, null, 'Password Reset successfully');
    }

    async verifyEmail(req, res, next) {
        const {id, token} = req.params;
        const userDTO = new UserDTO();
        userDTO.id = id;
        const user = await userService.getById(userDTO);
        user.verifiedAt = Date.now();
        user.verifyToken = null;
        user.verifyTokenExpires = null;
        const result = await user.save();
        ResponseHelper.success(res, null, 'Email verified successfully');
    }

    async sendEmailVerification(req, res, next) {
        const {email} = req.body;
        const userDTO = new UserDTO();
        userDTO.email = email;
        const user = await userService.getByEmail(userDTO);
        user.generateVerifyToken();
        const result = await user.save();

        /*
        @todo send email verification us
         */
        ResponseHelper.success(res, null, 'Check your email');
    }
}