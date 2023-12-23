import UserDTO from "../dto/UserDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UserService from "../services/UserService.js";
import RoleDTO from "../dto/RoleDTO.js";
import RoleService from "../services/RoleService.js";

const userService = new UserService();
const roleService = new RoleService();

class UserController {
    async all(req, res, next) {
        const users = await userService.all();
        return ResponseHelper.success(res, users);
    }

    async create(req, res, next) {
        const {email, username, phoneNumber, password} = req.body;
        const userDTO = new UserDTO(username, email, phoneNumber, password);
        const newUser = await userService.create(userDTO);
        if (!newUser) {
            return next(res);
        }
        return ResponseHelper.created(res, newUser);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {email, username, phoneNumber, password} = req.body;
        const userDTO = new UserDTO(username, email, phoneNumber, password, id);
        const user = await userService.update(userDTO);
        return ResponseHelper.success(res, user);
    }

    async delete(req, res, next) {
        const userDTO = new UserDTO();
        userDTO.id = req.params.id
        const user = await userService.delete(userDTO);

        return ResponseHelper.success(res, user);
    }

    async get(req, res, next) {
        const userDTO = new UserDTO();
        userDTO.id = req.params.id
        const user = await userService.get(userDTO);

        return ResponseHelper.success(res, user);
    }

    async assignRole(req, res, next) {

        const userDTO = new UserDTO();
        userDTO.id = req.params.userId;

        const roleDTO = new RoleDTO();
        roleDTO.id = req.params.roleId;

        const user = await userService.get(userDTO);
        const role = await roleService.get(roleDTO);
        if (!user || !role) {
            return next(res);
        }
        const result = await userService.assignRole(userDTO, roleDTO);
        if (!result) {
            return next(res);
        }
        return ResponseHelper.success(res, result);
    }
}

export default UserController;