import Permission from "../models/Permission.js";
import NotFoundError from "../errors/notFoundError.js";

class PermissionRepository {

    async create(permissionDTO) {
        const newPermission = new Permission({
            name: permissionDTO.name,
            slug: permissionDTO.slug
        });
        const permission = await newPermission.save();
        return permission;
    }

    async update(permissionDTO) {
        const permission = await Permission.findByIdAndUpdate(permissionDTO.id, {
            name: permissionDTO.name,
            slug: permissionDTO.slug,
        }, {
            new: true
        });
        if (!permission) {
            throw new NotFoundError();
        }
        return permission;
    }

    async delete(permissionDTO) {
        const permission = await Permission.findByIdAndDelete(permissionDTO.id);
        if (!permission) {
            throw new NotFoundError();
        }
        return permission;
    }

    async getById(permissionDTO) {
        const permission = await Permission.findById(permissionDTO.id)
        if (!permission) {
            throw new NotFoundError();
        }
        return permission;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
        };
        const permissions = await Permission.find().paginate();
        return permissions;
    }
}

export default PermissionRepository;