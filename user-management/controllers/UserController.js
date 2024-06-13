import UserDTO from "../dto/UserDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UserService from "../services/UserService.js";
import RoleDTO from "../dto/RoleDTO.js";
import RoleService from "../services/RoleService.js";
import UploadFile from "../helpers/uploadFile.js";

const userService = new UserService();
const roleService = new RoleService();

class UserController {
    async all(req, res, next) {
        const users = await userService.all();
        return ResponseHelper.success(res, users);
    }

    async create(req, res, next) {
        const imagePath = await UploadFile(req)
        const {email, username, phoneNumber, password} = req.body;
        const userDTO = new UserDTO(username, email, phoneNumber, password, imagePath);
        const newUser = await userService.create(userDTO);
        if (!newUser) {
            return next(res);
        }
        return ResponseHelper.created(res, newUser);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const imagePath = await UploadFile(req, true)

        const {email, username, phoneNumber, password} = req.body;
        const userDTO = new UserDTO(username, email, phoneNumber, password, imagePath, id);
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