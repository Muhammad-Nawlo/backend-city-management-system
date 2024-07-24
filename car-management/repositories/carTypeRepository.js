import CarType from "../models/CarType.js";

import NotFoundError from "../errors/notFoundError.js";

class CarTypeRepository {
    async create(carTypeDTO) {
        const newCarType = new CarType({
            name: carTypeDTO.name,
            description: carTypeDTO.description,

        });
        const carType = await newCarType.save();
        return carType;
    }

    async update(carTypeDTO) {
        const carType = await CarType.findByIdAndUpdate(carTypeDTO.id, {
                name: carTypeDTO.name,
                description: carTypeDTO.description,
            }, {
                new: true
            }
        );
        if (!carType) {
            throw new NotFoundError();
        }
        return carType;
    }

    async delete(carTypeDTO) {
        const carType = await CarType.findByIdAndDelete(carTypeDTO.id);
        if (!carType) {
            throw new NotFoundError();
        }
        return carType;
    }

    async getById(carTypeDTO) {
        const carType = await CarType.findById(carTypeDTO.id);
        if (!carType) {
            throw new NotFoundError();
        }
        return carType;
    }

    async all() {
        const carTypes = await CarType.find().limit(10).exec();
        return carTypes;
    }
}

export default CarTypeRepository;
