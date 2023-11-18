import ModuleRepository from "../repositories/moduleRepository.js";

const moduleRepository = new ModuleRepository();

export class ModuleService {
    async create(moduleDTO) {
        const newModule = await moduleRepository.create(moduleDTO);
        if (!newModule) {
            throw new Error(newModule);
        }
        return newModule;
    }

    async update(moduleDTO) {
        const module = await moduleRepository.update(moduleDTO);
        if (!module) {
            throw new Error(module);
        }
        return module;
    }

    async delete(moduleDTO) {
        const module = await moduleRepository.delete(moduleDTO);
        if (!module) {
            throw new Error(module);
        }
        return module;
    }

    async get(moduleDTO) {
        const module = await moduleRepository.getById(moduleDTO);
        if (!module) {
            throw new Error(module);
        }
        return module;
    }


    async all() {
        const modules = await moduleRepository.all();
        if (!modules) {
            throw new Error(modules);
        }
        return modules;
    }
}

export default ModuleService;