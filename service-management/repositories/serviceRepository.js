import Service from "../models/Service.js";
import mongoose from "mongoose";
import NotFoundError from "../errors/notFoundError.js";

class ServiceRepository {

    async create(serviceDTO) {
        const newService = new Service({
            name: serviceDTO.name,
            slug: serviceDTO.slug
        });
        const service = await newService.save();
        return service;
    }

    async update(serviceDTO) {
        const service = await Service.findByIdAndUpdate(serviceDTO.id, {
            name: serviceDTO.name,
            slug: serviceDTO.slug,
        }, {
            new: true
        });
        if (!service) {
            throw new NotFoundError();
        }
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
        const service = await Service.findById(serviceDTO.id)
        if (!service) {
            throw new NotFoundError();
        }
        return service;
    }

    async all() {
        const services = await Service.find().limit(10).exec();
        return services;
    }
}

export default ServiceRepository;