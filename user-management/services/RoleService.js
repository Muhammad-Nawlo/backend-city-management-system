import RoleRepository from "../repositories/roleRepository.js";

const roleRepository = new RoleRepository();

export class RoleService {
    async create(roleDTO) {
        const newRole = await roleRepository.create(roleDTO);

        return newRole;
    }

    async update(roleDTO) {
        const role = await roleRepository.update(roleDTO);

        return role;
    }

    async delete(roleDTO) {
        const role = await roleRepository.delete(roleDTO);

        return role;
    }

    async get(roleDTO) {
        const role = await roleRepository.getById(roleDTO);

        return role;
    }


    async all(req) {
        const roles = await roleRepository.all(req);

        return roles;
    }

    async assignPermission(roleDTO, permissionDTO) {
        const result = await roleRepository.assignPermission(roleDTO, permissionDTO);
        return result;
    }
}

export default RoleService;