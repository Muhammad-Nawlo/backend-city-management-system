import Agent from "../models/Agent.js";

import NotFoundError from "../errors/notFoundError.js";

class AgentRepository {
    async create(agentDTO) {
        const newAgent = new Agent({
            email: agentDTO.email,
            username: agentDTO.username,
            phoneNumber: agentDTO.phoneNumber,
            fullName: agentDTO.fullName,
            licenseNumber: agentDTO.licenseNumber
        });
        const agent = await newAgent.save();
        return agent;
    }

    async update(agentDTO) {
        const agent = await Agent.findByIdAndUpdate(agentDTO.id, {
                email: agentDTO.email,
                username: agentDTO.username,
                phoneNumber: agentDTO.phoneNumber,
                fullName: agentDTO.fullName,
                licenseNumber: agentDTO.licenseNumber
            }, {
                new: true
            }
        );
        if (!agent) {
            throw new NotFoundError();
        }
        return agent;
    }

    async delete(agentDTO) {
        const agent = await Agent.findByIdAndDelete(agentDTO.id);
        if (!agent) {
            throw new NotFoundError();
        }
        return agent;
    }

    async getById(agentDTO) {
        const agent = await Agent.findById(agentDTO.id);
        if (!agent) {
            throw new NotFoundError();
        }
        return agent;
    }

    async all() {
        const agents = await Agent.find().limit(10).exec();
        return agents;
    }
}

export default AgentRepository;
