import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import RestaurantController from "../controllers/RestaurantController.js";
import {restaurantValidation} from "../middlewares/restaurantValidation.js";

const router = express.Router();


const restaurantController = new RestaurantController();

router.get('/', catchErrors(restaurantController.all));
router.get('/search', catchErrors(restaurantController.all));
router.post('/', restaurantValidation, validateRequest, catchErrors(restaurantController.create));
router.put('/:id', restaurantValidation, validateRequest, catchErrors(restaurantController.update));
router.delete('/:id', validateRequest, catchErrors(restaurantController.delete));
router.get('/:id', catchErrors(restaurantController.get));

export default router;
