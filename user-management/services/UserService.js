import UserRepository from "../repositories/userRepository.js";

const userRepository = new UserRepository();

export class UserService {
    async create(usersDTO) {
        const newUser = await userRepository.create(usersDTO);
        if (!newUser) {
            throw new Error(newUser);
        }
        return newUser;
    }

    async update(usersDTO) {
        const users = await userRepository.update(usersDTO);
        if (!users) {
            throw new Error(users);
        }
        return users;
    }

    async delete(usersDTO) {
        const users = await userRepository.delete(usersDTO);
        if (!users) {
            throw new Error(users);
        }
        return users;
    }

    async get(usersDTO) {
        const users = await userRepository.getById(usersDTO);
        if (!users) {
            throw new Error(users);
        }
        return users;
    }


    async all() {
        const users = await userRepository.all();
        if (!users) {
            throw new Error(users);
        }
        return users;
    }
}

export default UserService;