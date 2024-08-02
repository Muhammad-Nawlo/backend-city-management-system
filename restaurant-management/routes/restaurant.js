import express from "express";
import validateRequest from "../middlewares/validateRequest.js";
import catchErrors from "../handlers/catchErrors.js";
import RestaurantController from "../controllers/RestaurantController.js";
import { restaurantValidation } from "../middlewares/restaurantValidation.js";
import authJWT from "../helpers/authJWT.js";

const router = express.Router();


const restaurantController = new RestaurantController();

router.get('/', authJWT, catchErrors(restaurantController.all));
router.get('/search', authJWT, catchErrors(restaurantController.all));
router.post('/', authJWT, restaurantValidation, validateRequest, catchErrors(restaurantController.create));
router.put('/:id', authJWT, restaurantValidation, validateRequest, catchErrors(restaurantController.update));
router.delete('/:id', authJWT, validateRequest, catchErrors(restaurantController.delete));
router.get('/:id', authJWT, catchErrors(restaurantController.get));

export default router;
