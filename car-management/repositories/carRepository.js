import Car from "../models/Car.js";

import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";

class CarRepository {
    async create(carDTO) {
        const newCar = new Car({
            make: carDTO.make,
            model: carDTO.model,
            year: carDTO.year,
            capacity: carDTO.capacity,
            type: carDTO.type,
            registrationNumber: carDTO.registrationNumber,
            price: carDTO.price,
            status: carDTO.status,
            images: carDTO.images,
            color: carDTO.color
        });
        const car = await newCar.save();
        return car;
    }

    async update(carDTO) {

        const car = await Car.findById(carDTO.id);
        if (!car) {
            throw new NotFoundError();
        }
        car.make = carDTO.make;
        car.model = carDTO.model;
        car.year = carDTO.year;
        car.capacity = carDTO.capacity;
        car.registrationNumber = carDTO.registrationNumber;
        car.price = carDTO.price;
        car.status = carDTO.status;
        car.color = carDTO.color;
        car.type = carDTO.type;

        if (carDTO.images !== 'DONT_UPDATE') {
            car.images = carDTO.images;
        }
        await car.save();
        return car;
    }

    async delete(carDTO) {
        const car = await Car.findByIdAndDelete(carDTO.id);
        if (!car) {
            throw new NotFoundError();
        }
        return car;
    }

    async getById(carDTO) {
        const car = await Car.findById(carDTO.id).populate("type");
        if (!car) {
            throw new NotFoundError();
        }
        return car;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: 'type'
        };
        const searchOptions = searchHandler(req);
        const cars = await Car.find(searchOptions).paginate(options);
        return cars;
    }

    async changeStatus(carDTO) {
        const car = await Car.findById(carDTO.id);
        if (!car) {
            throw new NotFoundError();
        }
        car.status = carDTO.status;
        await car.save();
        return car;
    }
}

export default CarRepository;
