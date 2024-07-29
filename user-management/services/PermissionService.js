import PermissionRepository from "../repositories/permissionRepository.js";

const permissionRepository = new PermissionRepository();

export class PermissionService {
    async create(permissionDTO) {
        const newPermission = await permissionRepository.create(permissionDTO);

        return newPermission;
    }

    async update(permissionDTO) {
        const permission = await permissionRepository.update(permissionDTO);

        return permission;
    }

    async delete(permissionDTO) {
        const permission = await permissionRepository.delete(permissionDTO);

        return permission;
    }

    async get(permissionDTO) {
        const permission = await permissionRepository.getById(permissionDTO);

        return permission;
    }


    async all(req) {
        const permissions = await permissionRepository.all(req);

        return permissions;
    }
}

export default PermissionService;