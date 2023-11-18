import RoleRepository from "../repositories/roleRepository.js";

const roleRepository = new RoleRepository();

export class RoleService {
    async create(roleDTO) {
        const newRole = await roleRepository.create(roleDTO);
        if (!newRole) {
            throw new Error(newRole);
        }
        return newRole;
    }

    async update(roleDTO) {
        const role = await roleRepository.update(roleDTO);
        if (!role) {
            throw new Error(role);
        }
        return role;
    }

    async delete(roleDTO) {
        const role = await roleRepository.delete(roleDTO);
        if (!role) {
            throw new Error(role);
        }
        return role;
    }

    async get(roleDTO) {
        const role = await roleRepository.getById(roleDTO);
        if (!role) {
            throw new Error(role);
        }
        return role;
    }


    async all() {
        const roles = await roleRepository.all();
        if (!roles) {
            throw new Error(roles);
        }
        return roles;
    }
}

export default RoleService;