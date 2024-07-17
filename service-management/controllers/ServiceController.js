import ServiceDTO from "../dto/ServiceDTO.js";
import ServiceService from "../services/ServiceService.js";
import ResponseHelper from "../helpers/responseHelper.js";
import UploadFile from "../helpers/uploadFile.js";

const serviceService = new ServiceService();

class ServiceController {
    async all(req, res, next) {
        const services = await serviceService.all();
        return ResponseHelper.success(res, services);
    }

    async create(req, res, next) {
        const imagePath = await UploadFile(req);
        const {name, slug, description, status} = req.body;
        const serviceDTO = new ServiceDTO(name, slug, description, imagePath, status);
        const newService = await serviceService.create(serviceDTO);
        if (!newService) {
            return next(res);
        }
        return ResponseHelper.created(res, newService);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const imagePath = await UploadFile(req, true)

        const {name, slug, description,status} = req.body;
        const serviceDTO = new ServiceDTO(name, slug, description, imagePath,status, id);
        const service = await serviceService.update(serviceDTO);
        return ResponseHelper.success(res, service);
    }

    async delete(req, res, next) {
        const serviceDTO = new ServiceDTO();
        serviceDTO.id = req.params.id
        const service = await serviceService.delete(serviceDTO);

        return ResponseHelper.success(res, service);
    }

    async get(req, res, next) {
        const serviceDTO = new ServiceDTO();
        serviceDTO.id = req.params.id
        const service = await serviceService.get(serviceDTO);
        return ResponseHelper.success(res, service);
    }
}

export default ServiceController;