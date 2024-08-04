import UserRepository from "../repositories/userRepository.js";
import UserDTO from "../dto/UserDTO.js";

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

    async subscribe(payload) {
        payload = JSON.parse(payload)
        const {event, data} = payload;
        const userDTO = new UserDTO();
        userDTO.id = data.id;
        let result = null;
        switch (event) {
            case 'GET_USER':
                result = await this.getById(userDTO);
                break;
            default:
                result = null;
                break;
        }
        return result;
    }
}

export default UserService;