import ModuleDTO from "../dto/ModuleDTO.js";
import ModuleService from "../services/ModuleService.js";
import ResponseHelper from "../helpers/responseHelper.js";

const moduleService = new ModuleService();

class ModuleController {
    async all(req, res, next) {
        const modules = await moduleService.all();

        ResponseHelper.success(res, modules);
    }

    async create(req, res, next) {
        const {name, slug} = req.body;
        const moduleDTO = new ModuleDTO(name, slug);
        const newModule = await moduleService.create(moduleDTO);

        ResponseHelper.created(res, newModule);
    }

    async update(req, res, next) {
        const id = req.params.id;
        const {name, slug} = req.body;
        const moduleDTO = new ModuleDTO(name, slug, id);
        const module = await moduleService.update(moduleDTO);

        ResponseHelper.success(res, module);
    }

    async delete(req, res, next) {
        const moduleDTO = new ModuleDTO();
        moduleDTO.id = req.params.id;
        const module = await moduleService.delete(moduleDTO);

        ResponseHelper.success(res, module);
    }

    async get(req, res, next) {
        const moduleDTO = new ModuleDTO();
        moduleDTO.id = req.params.id;
        const module = await moduleService.get(moduleDTO);

        ResponseHelper.success(res, module);
    }
}

export default ModuleController;