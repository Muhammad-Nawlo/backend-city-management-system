import MaintenanceRequestRepository from "../repositories/maintenanceRequestRepository.js";

const maintenanceRequestRepository = new MaintenanceRequestRepository();

export class MaintenanceRequestService {
    async create(maintenanceRequestDTO) {
        const newMaintenanceRequest = await maintenanceRequestRepository.create(maintenanceRequestDTO);
        return newMaintenanceRequest;
    }

    async update(maintenanceRequestDTO) {
        const maintenanceRequest = await maintenanceRequestRepository.update(maintenanceRequestDTO);
        return maintenanceRequest;
    }

    async delete(maintenanceRequestDTO) {
        const maintenanceRequest = await maintenanceRequestRepository.delete(maintenanceRequestDTO);
        return maintenanceRequest;
    }

    async get(maintenanceRequestDTO) {
        const maintenanceRequest = await maintenanceRequestRepository.getById(maintenanceRequestDTO);
        return maintenanceRequest;
    }


    async all(req) {
        const maintenanceRequests = await maintenanceRequestRepository.all(req);
        return maintenanceRequests;
    }


    async getById(maintenanceRequestDTO) {
        const maintenanceRequest = await maintenanceRequestRepository.getById(maintenanceRequestDTO);
        return maintenanceRequest;
    }
}

export default MaintenanceRequestService;