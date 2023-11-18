import UserRepository from "../repositories/userRepository.js";
import User from "../models/User.js";
import config from '../config/config.js';
import jwt from 'jsonwebtoken';

const userRepository = new UserRepository();

export class AuthService {
    async login(userDTO) {
        try {
            let user = null;
            if (userDTO.email) {
                user = await userRepository.getByEmail(userDTO);
            } else if (userDTO.phoneNumber) {
                user = await userRepository.getByEmail(userDTO);
            } else {
                user = await userRepository.getByEmail(userDTO);
            }
            if (!user) {
                throw new Error('Credentials are not correct');
            }
            const validPassword = user.validPassword(userDTO.password);
            if (!validPassword) {
                throw new Error('Credentials are not correct');
            }
            const token = jwt.sign({userId: user._id}, config.jwtSecret);
            return token;
        } catch (error) {
            throw new Error(error.message)
        }
    }

    async register(userDTO) {
        try {
            const newUser = await userRepository.create(userDTO);
            return newUser;
        } catch (error) {
            throw  new Error(error.message);
        }
    }
}