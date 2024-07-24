import Car from "../models/Car.js";

import NotFoundError from "../errors/notFoundError.js";

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
        const car = await Car.findByIdAndUpdate(carDTO.id, {
                make: carDTO.make,
                model: carDTO.model,
                year: carDTO.year,
                capacity: carDTO.capacity,
                registrationNumber: carDTO.registrationNumber,
                price: carDTO.price,
                status: carDTO.status,
                images: carDTO.images,
                color: carDTO.color,
                type: carDTO.type
            }, {
                new: true
            }
        );
        if (!car) {
            throw new NotFoundError();
        }
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
        const car = await Car.findById(carDTO.id);
        if (!car) {
            throw new NotFoundError();
        }
        return car;
    }

    async all() {
        const cars = await Car.find().limit(10).exec();
        return cars;
    }
}

export default CarRepository;
