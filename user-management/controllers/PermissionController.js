import PermissionDTO from "../dto/PermissionDTO.js";
import PermissionService from "../services/PermissionService.js";
import ResponseHelper from "../helpers/responseHelper.js";

const permissionService = new PermissionService();

class PermissionController {
    async all(req, res, next) {
        const permissions = await permissionService.all();

        return ResponseHelper.success(res, permissions);
    }

    async create(req, res, next) {
        const {name, slug} = req.body;
        const permissionDTO = new PermissionDTO(name, slug);
        const newPermission = await permissionService.create(permissionDTO);

        return ResponseHelper.created(res, newPermission);
    }

    async update(req, res, next) {
        const id = req.params.id;
        const {name, slug} = req.body;
        const permissionDTO = new PermissionDTO(name, slug, id);
        const permission = await permissionService.update(permissionDTO);

        ResponseHelper.success(res, permission);
    }

    async delete(req, res, next) {
        const permissionDTO = new PermissionDTO();
        permissionDTO.id = req.params.id;
        const permission = await permissionService.delete(permissionDTO);

        ResponseHelper.success(res, permission);
    }

    async get(req, res, next) {
        const permissionDTO = new PermissionDTO();
        permissionDTO.id = req.params.id;
        const permission = await permissionService.get(permissionDTO);
        ResponseHelper.success(res, permission);
    }
}

export default PermissionController;