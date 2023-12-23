import RoleDTO from "../dto/RoleDTO.js";
import RoleService from "../services/RoleService.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UserDTO from "../dto/UserDTO.js";
import PermissionDTO from "../dto/PermissionDTO.js";
import PermissionService from "../services/PermissionService.js";

const roleService = new RoleService();
const permissionService = new PermissionService();

class RoleController {
    async all(req, res, next) {
        const roles = await roleService.all();

        return ResponseHelper.success(res, roles);
    }

    async create(req, res, next) {
        const {name, slug} = req.body;
        const roleDTO = new RoleDTO(name, slug);
        const newRole = await roleService.create(roleDTO);

        return ResponseHelper.created(res, newRole);
    }

    async update(req, res, next) {
        const id = req.params.id;
        const {name, slug} = req.body;
        const roleDTO = new RoleDTO(name, slug, id);
        const role = await roleService.update(roleDTO);

        ResponseHelper.success(res, role);
    }

    async delete(req, res, next) {
        const roleDTO = new RoleDTO();
        roleDTO.id = req.params.id;
        const role = await roleService.delete(roleDTO);

        ResponseHelper.success(res, role);
    }

    async get(req, res, next) {
        const roleDTO = new RoleDTO();
        roleDTO.id = req.params.id;
        const role = await roleService.get(roleDTO);

        ResponseHelper.success(res, role);
    }

    async assignPermission(req, res, next) {
        const roleDTO = new RoleDTO();
        roleDTO.id = req.params.roleId;

        const permissionDTO = new PermissionDTO();
        permissionDTO.id = req.params.permissionId;

        const permission = await permissionService.get(permissionDTO);
        const role = await roleService.get(roleDTO);
        if (!permission || !role) {
            throw new Error('Role or Permission not found');
        }
        const result = await roleService.assignPermission( roleDTO,permissionDTO);

        ResponseHelper.success(res, result);
    }
}

export default RoleController;