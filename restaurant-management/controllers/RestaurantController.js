import RestaurantDTO from "../dto/RestaurantDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import RestaurantService from "../services/RestaurantService.js";
import RoleDTO from "../dto/OrderDTO.js";
import UploadFile from "../helpers/uploadFile.js";

const restaurantService = new RestaurantService();

class RestaurantController {
    async all(req, res, next) {
        const restaurants = await restaurantService.all();
        return ResponseHelper.success(res, restaurants);
    }

    async create(req, res, next) {
        const imagePath = await UploadFile(req);
        const {name, description, phoneNumber, address} = req.body;
        const restaurantDTO = new RestaurantDTO(name, description, phoneNumber, address, imagePath);
        const newRestaurant = await restaurantService.create(restaurantDTO);
        if (!newRestaurant) {
            return next(res);
        }
        return ResponseHelper.created(res, newRestaurant);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const imagePath = await UploadFile(req, true)

        const {name, description, phoneNumber, address} = req.body;
        const restaurantDTO = new RestaurantDTO(name, description, phoneNumber, address, imagePath, id);
        const restaurant = await restaurantService.update(restaurantDTO);
        return ResponseHelper.success(res, restaurant);
    }

    async delete(req, res, next) {
        const restaurantDTO = new RestaurantDTO();
        restaurantDTO.id = req.params.id
        const restaurant = await restaurantService.delete(restaurantDTO);

        return ResponseHelper.success(res, restaurant);
    }

    async get(req, res, next) {
        const restaurantDTO = new RestaurantDTO();
        restaurantDTO.id = req.params.id
        const restaurant = await restaurantService.get(restaurantDTO);

        return ResponseHelper.success(res, restaurant);
    }
l}

export default RestaurantController;