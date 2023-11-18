import Role from "../models/Role.js";

class RoleRepository {

    async create(roleDTO) {
        const newRole =await new Role({
            name: roleDTO.name,
            slug: roleDTO.slug
        });
        const role = await newRole.save();
        if (!role) {
            throw new Error(role);
        }
        return role;
    }

    async update(roleDTO) {
        const role = await Role.findOneAndUpdate({
            id: roleDTO.id
        }, {
            name: roleDTO.name,
            slug: roleDTO.slug,
        },{
            new: true
        });
        if (!role) {
            throw new Error(role);
        }
        return role;
    }

    async delete(roleDTO) {
        const role = await Role.findByIdAndDelete(roleDTO.id);
        if (!role) {
            throw new Error(role);
        }
        return role;
    }

    async getById(roleDTO) {
        const role = await Role.findById(roleDTO.id)
        if (!role) {
            throw new Error(role);
        }
        return role;
    }

    async all() {
        const roles = await Role.find().limit(10).exec();
        console.log(roles);
        if (!roles) {
            throw new Error(roles);
        }
        return roles;
    }
}

export default RoleRepository;