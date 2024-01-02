import ServiceDTO from "../dto/ServiceDTO.js";
import ServiceService from "../services/ServiceService.js";
import ResponseHelper from "../helpers/responseHelper.js";

const serviceService = new ServiceService();

class ServiceController {
    async all(req, res, next) {
        const modules = await serviceService.all();

        ResponseHelper.success(res, modules);
    }

    async create(req, res, next) {
        const {name, slug} = req.body;
        const moduleDTO = new ServiceDTO(name, slug);
        const newModule = await serviceService.create(moduleDTO);

        ResponseHelper.created(res, newModule);
    }

    async update(req, res, next) {
        const id = req.params.id;
        const {name, slug} = req.body;
        const moduleDTO = new ServiceDTO(name, slug, id);
        const module = await serviceService.update(moduleDTO);

        ResponseHelper.success(res, module);
    }

    async delete(req, res, next) {
        const moduleDTO = new ServiceDTO();
        moduleDTO.id = req.params.id;
        const module = await serviceService.delete(moduleDTO);

        ResponseHelper.success(res, module);
    }

    async get(req, res, next) {
        const moduleDTO = new ServiceDTO();
        moduleDTO.id = req.params.id;
        const module = await serviceService.get(moduleDTO);

        ResponseHelper.success(res, module);
    }
}

export default ServiceController;