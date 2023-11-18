import PermissionRepository from "../repositories/permissionRepository.js";

const permissionRepository = new PermissionRepository();

export class PermissionService {
    async create(permissionDTO) {
        const newPermission = await permissionRepository.create(permissionDTO);
        if (!newPermission) {
            throw new Error(newPermission);
        }
        return newPermission;
    }

    async update(permissionDTO) {
        const permission = await permissionRepository.update(permissionDTO);
        if (!permission) {
            throw new Error(permission);
        }
        return permission;
    }

    async delete(permissionDTO) {
        const permission = await permissionRepository.delete(permissionDTO);
        if (!permission) {
            throw new Error(permission);
        }
        return permission;
    }

    async get(permissionDTO) {
        const permission = await permissionRepository.getById(permissionDTO);
        if (!permission) {
            throw new Error(permission);
        }
        return permission;
    }


    async all() {
        const permissions = await permissionRepository.all();
        if (!permissions) {
            throw new Error(permissions);
        }
        return permissions;
    }
}

export default PermissionService;