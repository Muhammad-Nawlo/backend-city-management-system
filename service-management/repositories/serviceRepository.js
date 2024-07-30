import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";
import Service from "../models/Service.js";

class ServiceRepository {
    async create(serviceDTO) {
        const newService = new Service({
            name: serviceDTO.name,
            slug: serviceDTO.slug,
            description: serviceDTO.description,
            image: serviceDTO.image,
            status: serviceDTO.status
        });
        const service = await newService.save();
        return service;
    }

    async update(serviceDTO) {
        const service = await Service.findById(serviceDTO.id)
        if (!service) {
            throw new NotFoundError();
        }
        service.name = serviceDTO.name;
        service.slug = serviceDTO.slug;
        service.status = serviceDTO.status;
        service.description = serviceDTO.description;
        if (serviceDTO.image !== 'DONT_UPDATE') {
            service.image = serviceDTO.image;
        }
        await service.save();
        return service;
    }

    async delete(serviceDTO) {
        const service = await Service.findByIdAndDelete(serviceDTO.id);
        if (!service) {
            throw new NotFoundError();
        }
        return service;
    }

    async getById(serviceDTO) {
        const service = await Service.findById(serviceDTO.id);
        if (!service) {
            throw new NotFoundError();
        }
        return service;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
        };
        const searchOptions =searchHandler(req)
        const service = await Service.find(searchOptions).paginate(options);
        return service;
    }
}

export default ServiceRepository;
