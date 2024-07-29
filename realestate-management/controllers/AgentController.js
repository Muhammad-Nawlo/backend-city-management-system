import AgentDTO from "../dto/AgentDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import AgentService from "../services/AgentService.js";
import UploadFile from "../helpers/uploadFile.js";

const agentService = new AgentService();

class AgentController {
    async all(req, res, next) {
        const agents = await agentService.all(req);
        return ResponseHelper.success(res, agents);
    }

    async create(req, res, next) {
        const imagePath = await UploadFile(req);
        const {email, username, phoneNumber, fullName, licenseNumber} = req.body;
        const agentDTO = new AgentDTO(email, username, phoneNumber, fullName, licenseNumber, imagePath);
        const newAgent = await agentService.create(agentDTO);
        if (!newAgent) {
            return next(res);
        }
        return ResponseHelper.created(res, newAgent);
    }

    async update(req, res, next) {
        const imagePath = await UploadFile(req, true)

        const {id} = req.params;
        const {email, username, phoneNumber, fullName, licenseNumber} = req.body;
        const agentDTO = new AgentDTO(email, username, phoneNumber, fullName, licenseNumber, imagePath, id);
        const agent = await agentService.update(agentDTO);
        return ResponseHelper.success(res, agent);
    }

    async delete(req, res, next) {
        const agentDTO = new AgentDTO();
        agentDTO.id = req.params.id
        const agent = await agentService.delete(agentDTO);

        return ResponseHelper.success(res, agent);
    }

    async get(req, res, next) {
        const agentDTO = new AgentDTO();
        agentDTO.id = req.params.id
        const agent = await agentService.get(agentDTO);

        return ResponseHelper.success(res, agent);
    }
}

export default AgentController;