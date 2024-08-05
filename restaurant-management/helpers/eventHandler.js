import axios from "axios";
import config from "../config/config.js";
import NotFoundError from "../errors/notFoundError.js";

export default async function (data) {
    const payload = {
        event: "GET_USER",
        data: data
    }
    const response = await axios.post(config.userServiceEvent, {payload: JSON.stringify(payload)});
    if (response && response.data.status) {
        return response.data
    } else if (response && response.status === 404) {
        throw new NotFoundError(response.data.message)
    }
}