import CarType from "../models/CarType.js";

import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";

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

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10
        };
        const searchOptions = searchHandler(req);

        const carTypes = await CarType.find(searchOptions).paginate(options);
        return carTypes;
    }
}

export default CarTypeRepository;
