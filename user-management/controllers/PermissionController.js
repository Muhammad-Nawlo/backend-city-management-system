import PermissionDTO from "../dto/PermissionDTO.js";
import PermissionService from "../services/PermissionService.js";
import ResponseHelper from "../helpers/responseHelper.js";

const permissionService = new PermissionService();

class PermissionController {
    async all(req, res, next) {
        const permissions = await permissionService.all();
        if (!permissions) {
            throw new Error(permissions);
        }
        return ResponseHelper.success(res, permissions);
    }

    async create(req, res, next) {
        const {name, slug} = req.body;
        const permissionDTO = new PermissionDTO(name, slug);
        const newPermission = await permissionService.create(permissionDTO);
        if (!newPermission) {
            throw new Error(newPermission);
        }
        return ResponseHelper.created(res, newPermission);
    }

    async update(req, res, next) {
        const id = req.params.id;
        const {name, slug} = req.body;
        const permissionDTO = new PermissionDTO(name, slug, id);
        const permission = await permissionService.update(permissionDTO);
        if (!permission) {
            throw new Error(permission);
        }
        ResponseHelper.success(res, permission);
    }

    async delete(req, res, next) {
        const permissionDTO = new PermissionDTO();
        permissionDTO.id = req.params.id;
        const permission = await permissionService.delete(permissionDTO);
        if (!permission) {
            throw new Error(permission);
        }
        ResponseHelper.success(res, permission);
    }

    async get(req, res, next) {
        const permissionDTO = new PermissionDTO();
        permissionDTO.id = req.params.id;

        const permission = await permissionService.get(permissionDTO);
        if (!permission) {
            throw new Error(permission);
        }
        ResponseHelper.success(res, permission);
    }
}

export default PermissionController;