import RestaurantRepository from "../repositories/restaurantRepository.js";

const restaurantRepository = new RestaurantRepository();

export class RestaurantService {
    async create(restaurantDTO) {
        const newRestaurant = await restaurantRepository.create(restaurantDTO);
        return newRestaurant;
    }

    async update(restaurantDTO) {
        const restaurants = await restaurantRepository.update(restaurantDTO);

        return restaurants;
    }

    async delete(restaurantDTO) {
        const restaurants = await restaurantRepository.delete(restaurantDTO);

        return restaurants;
    }

    async get(restaurantDTO) {
        const user = await restaurantRepository.getById(restaurantDTO);
        return user;
    }


    async all(req) {
        const restaurants = await restaurantRepository.all(req);
        return restaurants;
    }


}

export default RestaurantService;