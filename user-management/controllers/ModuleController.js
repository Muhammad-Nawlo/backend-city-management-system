import ModuleDTO from "../dto/ModuleDTO.js";
import ModuleService from "../services/ModuleService.js";
import ResponseHelper from "../helpers/responseHelper.js";

const moduleService = new ModuleService();

class ModuleController {
    async all(req, res, next) {
        const modules = await moduleService.all();
        if (!modules) {
            throw new Error(modules);
        }
        ResponseHelper.success(res, modules);
    }

    async create(req, res, next) {
        const {name, slug} = req.body;
        const moduleDTO = new ModuleDTO(name, slug);
        const newModule = await moduleService.create(moduleDTO);
        if (!newModule) {
            throw new Error(newModule);
        }
        ResponseHelper.created(res, newModule);
    }

    async update(req, res, next) {
        const id = req.params.id;
        const {name, slug} = req.body;
        const moduleDTO = new ModuleDTO(name, slug, id);
        const module = await moduleService.update(moduleDTO);
        if (!module) {
            throw new Error(module);
        }
        ResponseHelper.success(res, module);
    }

    async delete(req, res, next) {
        const moduleDTO = new ModuleDTO();
        moduleDTO.id = req.params.id;
        const module = await moduleService.delete(moduleDTO);
        if (!module) {
            throw new Error(module);
        }
        ResponseHelper.success(res, module);
    }

    async get(req, res, next) {
        const moduleDTO = new ModuleDTO();
        moduleDTO.id = req.params.id;
        const module = await moduleService.get(moduleDTO);
        if (!module) {
            throw new Error(module);
        }
        ResponseHelper.success(res, module);
    }
}
export default ModuleController;