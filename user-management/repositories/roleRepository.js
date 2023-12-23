import Role from "../models/Role.js";
import User from "../models/User.js";
import Permission from "../models/Permission.js";
import NotFoundError from "../errors/notFoundError.js";

class RoleRepository {

    async create(roleDTO) {
        const newRole = await new Role({
            name: roleDTO.name,
            slug: roleDTO.slug
        });
        const role = await newRole.save();
        return role;
    }

    async update(roleDTO) {
        const role = await Role.findByIdAndUpdate(roleDTO.id, {
            name: roleDTO.name,
            slug: roleDTO.slug,
        }, {
            new: true
        });
        if (!role) {
            throw new NotFoundError();
        }
        return role;
    }

    async delete(roleDTO) {
        const role = await Role.findByIdAndDelete(roleDTO.id);
        if (!role) {
            throw new NotFoundError();
        }
        return role;
    }

    async getById(roleDTO) {
        const role = await Role.findById(roleDTO.id)
        if (!role) {
            throw new NotFoundError();
        }
        return role;
    }

    async all() {
        const roles = await Role.find().limit(10).exec();
        return roles;
    }

    async assignPermission(roleDTO, permissionDTO) {
        const permission = await Permission.findById(permissionDTO.id);
        const role = await Role.findById(roleDTO.id);
        if (!role || !permission) {
            throw new NotFoundError();
        }
        role.permissions.push(permission);
        const result = await role.save();
        return result;
    }
}

export default RoleRepository;