import UserRepository from "../repositories/userRepository.js";

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


    async all() {
        const users = await userRepository.all();
        return users;
    }

    async assignRole(userDTO, roleDTO) {
        const result = await userRepository.assignRole(userDTO, roleDTO);
        return result;
    }
}

export default UserService;