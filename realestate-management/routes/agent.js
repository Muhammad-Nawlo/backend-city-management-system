import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import {updateAgentValidation} from "../middlewares/updateAgentValidation.js";
import catchErrors from "../handlers/catchErrors.js";
import AgentController from "../controllers/AgentController.js";
import {createAgentValidation} from "../middlewares/createAgentValidation.js";

const router = express.Router();


/*
    get  / get all agent
    get /:id get an agent
    post / create an agent
    put / update an agent
    delete /:id update an agent
 */

const agentController = new AgentController();

router.get('/', catchErrors(agentController.all));
router.post('/', createAgentValidation, validateRequest, catchErrors(agentController.create));
router.put('/:id', updateAgentValidation, validateRequest, catchErrors(agentController.update));
router.delete('/:id', validateRequest, catchErrors(agentController.delete));
router.get('/:id', catchErrors(agentController.get));
export default router;
