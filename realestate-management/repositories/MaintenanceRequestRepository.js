import MaintenanceRequest from "../models/MaintenanceRequest.js";

import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";
import mongoose from "mongoose";

class MaintenanceRequestRepository {
    async create(maintenanceRequestDTO) {
        const newMaintenanceRequest = new MaintenanceRequest({
            propertyId: maintenanceRequestDTO.propertyId,
            tenantId: maintenanceRequestDTO.tenantId,
            date: maintenanceRequestDTO.date,
            description: maintenanceRequestDTO.description,
            images: maintenanceRequestDTO.images,
            status: maintenanceRequestDTO.status,
        });
        const maintenanceRequest = await newMaintenanceRequest.save();
        return maintenanceRequest;
    }

    async update(maintenanceRequestDTO) {
        const maintenanceRequest = await MaintenanceRequest.findById(maintenanceRequestDTO.id)

        maintenanceRequest.status = maintenanceRequestDTO.status;

        await maintenanceRequest.save();

        return maintenanceRequest;
    }

    async delete(maintenanceRequestDTO) {
        const maintenanceRequest = await MaintenanceRequest.findByIdAndDelete(maintenanceRequestDTO.id);
        if (!maintenanceRequest) {
            throw new NotFoundError();
        }
        return maintenanceRequest;
    }

    async getById(maintenanceRequestDTO) {
        const maintenanceRequest = await MaintenanceRequest.findById(maintenanceRequestDTO.id);
        if (!maintenanceRequest) {
            throw new NotFoundError();
        }
        return maintenanceRequest;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: 'propertyId'
        };
        const searchOptions = searchHandler(req);
        const maintenanceRequests = await MaintenanceRequest.find(searchOptions).paginate(options);
        return maintenanceRequests;
    }

    async maintenanceRequestUser(userId, req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: 'propertyId'
        };
        const maintenanceRequests = await MaintenanceRequest.find({
            tenantId: new mongoose.Types.ObjectId(userId)
        }).paginate(options);
        return maintenanceRequests;
    }
}

export default MaintenanceRequestRepository;
