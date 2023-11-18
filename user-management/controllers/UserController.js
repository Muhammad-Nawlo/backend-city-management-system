import UserDTO from "../dto/UserDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UserService from "../services/UserService.js";

const userService = new UserService();

class UserController {
    async all(req, res, next) {
        const users = await userService.all();
        if (!users) {
            throw new Error(users);
        }
        ResponseHelper.success(res, users);
    }

    async create(req, res, next) {
        const {email, username, phoneNumber, password} = req.body;
        const userDTO = new UserDTO(username,email , phoneNumber, password);
        const newUser = await userService.create(userDTO);
        if (!newUser) {
            throw new Error(newUser);
        }
        ResponseHelper.created(res, newUser);
    }

    async update(req, res, next) {
        const id = req.params.id;
        const {email, username, phoneNumber, password} = req.body;
        const userDTO = new UserDTO(username,email , phoneNumber, password);
        const user = await userService.update(userDTO);
        if (!user) {
            throw new Error(user);
        }
        ResponseHelper.success(res, user);
    }

    async delete(req, res, next) {
        const userDTO = new UserDTO();
        userDTO.id = req.params.id
        const user = await userService.delete(userDTO);
        if (!user) {
            throw new Error(user);
        }
        ResponseHelper.success(res, user);
    }

    async get(req, res, next) {
        const userDTO = new UserDTO();
        userDTO.id = req.params.id
        const user = await userService.get(userDTO);
        if (!user) {
            throw new Error(user);
        }
        ResponseHelper.success(res, user);
    }
}

export default UserController;