import AgentRepository from "../repositories/agentRepository.js";

const agentRepository = new AgentRepository();

export class AgentService {
    async create(agentDTO) {
        const newAgent = await agentRepository.create(agentDTO);
        return newAgent;
    }

    async update(agentDTO) {
        const agent = await agentRepository.update(agentDTO);
        return agent;
    }

    async delete(agentDTO) {
        const agent = await agentRepository.delete(agentDTO);
        return agent;
    }

    async get(agentDTO) {
        const agent = await agentRepository.getById(agentDTO);
        return agent;
    }


    async all(req) {
        const agents = await agentRepository.all(req);
        return agents;
    }


    async getById(agentDTO) {
        const agent = await agentRepository.getById(agentDTO);
        return agent;
    }
}

export default AgentService;