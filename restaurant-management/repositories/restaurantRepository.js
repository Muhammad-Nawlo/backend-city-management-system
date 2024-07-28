import NotFoundError from "../errors/notFoundError.js";
import Restaurant from "../models/Restaurant.js";

class RestaurantRepository {
    async create(restaurantDTO) {
        const newRestaurant = new Restaurant({
            name: restaurantDTO.name,
            description: restaurantDTO.description,
            phoneNumber: restaurantDTO.phoneNumber,
            image: restaurantDTO.image,
            address: restaurantDTO.address
        });
        const restaurant = await newRestaurant.save();
        return restaurant;
    }

    async update(restaurantDTO) {
        const restaurant = await Restaurant.findById(restaurantDTO.id)
        if (!restaurant) {
            throw new NotFoundError();
        }
        restaurant.name = restaurantDTO.name;
        restaurant.description = restaurantDTO.description;
        restaurant.phoneNumber = restaurantDTO.phoneNumber;
        restaurant.address = restaurantDTO.address;
        if (restaurantDTO.image !== 'DONT_UPDATE') {
            restaurant.image = restaurantDTO.image;
        }
        await restaurant.save();

        return restaurant;
    }

    async delete(restaurantDTO) {
        const restaurant = await Restaurant.findByIdAndDelete(restaurantDTO.id);
        if (!restaurant) {
            throw new NotFoundError();
        }
        return restaurant;
    }

    async getById(restaurantDTO) {
        const restaurant = await Restaurant.findById(restaurantDTO.id);
        if (!restaurant) {
            throw new NotFoundError();
        }
        return restaurant;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
        };
        const restaurants = await Restaurant.find().paginate(options);
        return restaurants;
    }

}

export default RestaurantRepository;
