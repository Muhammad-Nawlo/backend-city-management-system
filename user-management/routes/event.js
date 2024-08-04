import express from "express";
import UserService from "../services/UserService.js";
import ResponseHelper from "../helpers/responseHelper.js";
import errorHandlerMiddleware from "../middlewares/errorHandlerMiddleware.js";

const router = express.Router();


const userService = new UserService();

router.post('/', async (req, res, next) => {
    const {payload} = req.body;
    try {
        const result = await userService.subscribe(payload);
        return ResponseHelper.success(res, result);
    } catch (err) {
        return errorHandlerMiddleware(err, req, res, next);
    }
});

export default router;
