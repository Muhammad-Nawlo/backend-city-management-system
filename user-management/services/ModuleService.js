import ModuleRepository from "../repositories/moduleRepository.js";

const moduleRepository = new ModuleRepository();

export class ModuleService {
    async create(moduleDTO) {
        const newModule = await moduleRepository.create(moduleDTO);
        return newModule;
    }

    async update(moduleDTO) {
        const module = await moduleRepository.update(moduleDTO);
        return module;
    }

    async delete(moduleDTO) {
        const module = await moduleRepository.delete(moduleDTO);
        return module;
    }

    async get(moduleDTO) {
        const module = await moduleRepository.getById(moduleDTO);
        return module;
    }


    async all() {
        const modules = await moduleRepository.all();
        return modules;
    }
}

export default ModuleService;