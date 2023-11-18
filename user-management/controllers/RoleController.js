import RoleDTO from "../dto/RoleDTO.js";
import RoleService from "../services/RoleService.js";
import ResponseHelper from "../helpers/responseHelper.js";

const roleService = new RoleService();

class RoleController {
    async all(req, res, next) {
        const roles = await roleService.all();
        if (!roles) {
            throw new Error(roles);
        }
        return ResponseHelper.success(res, roles);
    }

    async create(req, res, next) {
        const {name, slug} = req.body;
        const roleDTO = new RoleDTO(name, slug);
        const newRole = await roleService.create(roleDTO);
        if (!newRole) {
            throw new Error(newRole);
        }
        return ResponseHelper.created(res, newRole);
    }

    async update(req, res, next) {
        const id = req.params.id;
        const {name, slug} = req.body;
        const roleDTO = new RoleDTO(name, slug, id);
        const role = await roleService.update(roleDTO);
        if (!role) {
            throw new Error(role);
        }
        ResponseHelper.success(res, role);
    }

    async delete(req, res, next) {
        const roleDTO = new RoleDTO();
        roleDTO.id = req.params.id;
        const role = await roleService.delete(roleDTO);
        if (!role) {
            throw new Error(role);
        }
        ResponseHelper.success(res, role);
    }

    async get(req, res, next) {
        const roleDTO = new RoleDTO();
        roleDTO.id = req.params.id;
        const role = await roleService.get(roleDTO);
        if (!role) {
            throw new Error(role);
        }
        ResponseHelper.success(res, role);
    }
}

export default RoleController;