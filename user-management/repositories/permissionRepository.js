import Permission from "../models/Permission.js";

class PermissionRepository {

    async create(permissionDTO) {
        const newPermission = new Permission({
            name: permissionDTO.name,
            slug: permissionDTO.slug
        });
        const permission = await newPermission.save();
        if (!permission) {
            throw new Error(permission);
        }
        return permission;
    }

    async update(permissionDTO) {
        const permission = await Permission.findOneAndUpdate({
            id: permissionDTO.id
        }, {
            name: permissionDTO.name,
            slug: permissionDTO.slug,
        }, {
            new: true
        });
        if (!permission) {
            throw new Error(permission);
        }
        return permission;
    }

    async delete(permissionDTO) {
        const permission = await Permission.findByIdAndDelete(permissionDTO.id);
        if (!permission) {
            throw new Error(permission);
        }
        return permission;
    }

    async getById(permissionDTO) {
        const permission = await Permission.findById(permissionDTO.id)
        if (!permission) {
            throw new Error(permission);
        }
        return permission;
    }

    async all() {
        const permissions = await Permission.find().limit(10).exec();
        console.log(permissions);
        if (!permissions) {
            throw new Error(permissions);
        }
        return permissions;
    }
}

export default PermissionRepository;