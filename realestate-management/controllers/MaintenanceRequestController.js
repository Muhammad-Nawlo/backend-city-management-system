import MaintenanceRequestDTO from "../dto/MaintenanceRequestDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import MaintenanceRequestService from "../services/MaintenanceRequestService.js";
import UploadFiles from "../helpers/uploadFiles.js";


const maintenanceRequestService = new MaintenanceRequestService();


class MaintenanceRequestController {
    async all(req, res, next) {
        const maintenanceRequests = await maintenanceRequestService.all();
        return ResponseHelper.success(res, maintenanceRequests);
    }

    async create(req, res, next) {
        const imagesPath = await UploadFiles(req);

        const {propertyId, tenantId, date, description, status} = req.body;
        const maintenanceRequestDTO = new MaintenanceRequestDTO(propertyId, tenantId, date, description, imagesPath, status);
        const newMaintenanceRequest = await maintenanceRequestService.create(maintenanceRequestDTO);
        if (!newMaintenanceRequest) {
            return next(res);
        }
        return ResponseHelper.created(res, newMaintenanceRequest);
    }

    async update(req, res, next) {
        const imagesPath = await UploadFiles(req,true);
        const {id} = req.params;
        const {propertyId, tenantId, date, description, status} = req.body;
        const maintenanceRequestDTO = new MaintenanceRequestDTO(propertyId, tenantId, date, description, imagesPath, status, id);
        const maintenanceRequest = await maintenanceRequestService.update(maintenanceRequestDTO);
        return ResponseHelper.success(res, maintenanceRequest);
    }

    async delete(req, res, next) {
        const maintenanceRequestDTO = new MaintenanceRequestDTO();
        maintenanceRequestDTO.id = req.params.id;
        const maintenanceRequest = await maintenanceRequestService.delete(maintenanceRequestDTO);

        return ResponseHelper.success(res, maintenanceRequest);
    }

    async get(req, res, next) {
        const maintenanceRequestDTO = new MaintenanceRequestDTO();
        maintenanceRequestDTO.id = req.params.id
        const maintenanceRequest = await maintenanceRequestService.get(maintenanceRequestDTO);

        return ResponseHelper.success(res, maintenanceRequest);
    }

}

export default MaintenanceRequestController;