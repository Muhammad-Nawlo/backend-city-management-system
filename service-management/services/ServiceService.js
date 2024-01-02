import ServiceRepository from "../repositories/serviceRepository.js";

const serviceRepository = new ServiceRepository();

export class ServiceService {
    async create(serviceDTO) {
        const newService = await serviceRepository.create(serviceDTO);
        return newService;
    }

    async update(serviceDTO) {
        const module = await serviceRepository.update(serviceDTO);
        return module;
    }

    async delete(serviceDTO) {
        const module = await serviceRepository.delete(serviceDTO);
        return module;
    }

    async get(serviceDTO) {
        const module = await serviceRepository.getById(serviceDTO);
        return module;
    }


    async all() {
        const modules = await serviceRepository.all();
        return modules;
    }
}

export default ServiceService;