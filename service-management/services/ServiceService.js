import ServiceRepository from "../repositories/serviceRepository.js";

const serviceRepository = new ServiceRepository();

export class ServiceService {
    async create(serviceDTO) {
        const newService = await serviceRepository.create(serviceDTO);
        return newService;
    }

    async update(serviceDTO) {
        const service = await serviceRepository.update(serviceDTO);
        return service;
    }

    async delete(serviceDTO) {
        const service = await serviceRepository.delete(serviceDTO);
        return service;
    }

    async get(serviceDTO) {
        const service = await serviceRepository.getById(serviceDTO);
        return service;
    }


    async all(req) {
        const services = await serviceRepository.all(req);
        return services;
    }
}

export default ServiceService;