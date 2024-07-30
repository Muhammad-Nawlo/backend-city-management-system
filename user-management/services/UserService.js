import UserRepository from "../repositories/userRepository.js";
import User from "../models/User.js";
import NotFoundError from "../errors/notFoundError.js";

const userRepository = new UserRepository();

export class UserService {
    async create(usersDTO) {
        const newUser = await userRepository.create(usersDTO);
        return newUser;
    }

    async update(usersDTO) {
        const users = await userRepository.update(usersDTO);

        return users;
    }

    async delete(usersDTO) {
        const users = await userRepository.delete(usersDTO);

        return users;
    }

    async get(usersDTO) {
        const user = await userRepository.getById(usersDTO);
        return user;
    }


    async all(req) {
        const users = await userRepository.all(req);
        return users;
    }



    async getById(userDTO) {

        const user = await userRepository.getById(userDTO);

        return user;
    }

    async getByUsername(userDTO) {
        const user = await userRepository.getByUsername(userDTO);

        return user;
    }

    async getByEmail(userDTO) {
        const user = await userRepository.getByEmail(userDTO);

        return user;
    }

    async getByPhoneNumber(userDTO) {
        const user = await userRepository.getByPhoneNumber(userDTO);

        return user;
    }
    async getByToken(token) {
        const user = await userRepository.getByToken(token);

        return user;
    }
}

export default UserService;