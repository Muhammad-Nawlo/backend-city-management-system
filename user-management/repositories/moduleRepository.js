import Module from "../models/Module.js";
import mongoose from "mongoose";
import NotFoundError from "../errors/notFoundError.js";

class ModuleRepository {

    async create(moduleDTO) {
        const newModule = new Module({
            name: moduleDTO.name,
            slug: moduleDTO.slug
        });
        const module = await newModule.save();
        return module;
    }

    async update(moduleDTO) {
        const module = await Module.findByIdAndUpdate(moduleDTO.id, {
            name: moduleDTO.name,
            slug: moduleDTO.slug,
        }, {
            new: true
        });
        if (!module) {
            throw new NotFoundError();
        }
        return module;
    }

    async delete(moduleDTO) {
        const module = await Module.findByIdAndDelete(moduleDTO.id);
        if (!module) {
            throw new NotFoundError();
        }
        return module;
    }

    async getById(moduleDTO) {
        const module = await Module.findById(moduleDTO.id)
        if (!module) {
            throw new NotFoundError();
        }
        return module;
    }

    async all() {
        const modules = await Module.find().limit(10).exec();
        return modules;
    }
}

export default ModuleRepository;