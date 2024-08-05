import Agent from "../models/Agent.js";

import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";
import eventHandler from "../helpers/eventHandler.js";

class AgentRepository {
    async create(agentDTO) {
        const newAgent = new Agent({
            email: agentDTO.email,
            username: agentDTO.username,
            phoneNumber: agentDTO.phoneNumber,
            fullName: agentDTO.fullName,
            licenseNumber: agentDTO.licenseNumber,
            image: agentDTO.image
        });
        const agent = await newAgent.save();

        // const createUser = await eventHandler({
        //     email: agentDTO.email,
        //     username: agentDTO.username,
        //     phoneNumber: agentDTO.phoneNumber,
        //     fullName: agentDTO.fullName,
        //     licenseNumber: agentDTO.licenseNumber,
        //     image: agentDTO.image
        // }, "CREATE_USER");
        return agent;
    }

    async update(agentDTO) {
        const agent = await Agent.findById(agentDTO.id);
        if (!agent) {
            throw new NotFoundError();
        }
        agent.email = agentDTO.email;
        agent.username = agentDTO.username;
        agent.phoneNumber = agentDTO.phoneNumber;
        agent.fullName = agentDTO.fullName;
        agent.licenseNumber = agentDTO.licenseNumber;

        if (agentDTO.image !== 'DONT_UPDATE') {
            agent.image = agentDTO.image;
        }
        await agent.save();

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

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10
        };
        const searchOptions = searchHandler(req);
        const agents = await Agent.find(searchOptions).paginate(options);
        return agents;
    }
}

export default AgentRepository;
