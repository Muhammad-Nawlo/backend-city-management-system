import UserRepository from "../repositories/userRepository.js";
import User from "../models/User.js";
import config from '../config/config.js';
import jwt from 'jsonwebtoken';
import NotFoundError from "../errors/notFoundError.js";
import AuthError from "../errors/authError.js";

const userRepository = new UserRepository();

export class AuthService {
    async login(userDTO) {
        let user = null;
        try {
            if (userDTO.email) {
                user = await userRepository.getByEmail(userDTO);
            } else if (userDTO.phoneNumber) {
                user = await userRepository.getByPhoneNumber(userDTO);
            } else {
                user = await userRepository.getByUsername(userDTO);
            }
        } catch (e) {
            throw new AuthError();
        }
        const validPassword = user.validPassword(userDTO.password);
        if (!validPassword) {
            throw new AuthError();
        }
        const token = jwt.sign({userId: user._id}, config.jwtSecret);
        return {token, user};
    }

    async register(userDTO) {
        const newUser = await userRepository.create(userDTO);
        return newUser;
    }


}