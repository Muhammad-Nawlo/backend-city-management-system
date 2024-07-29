import CarTypeRepository from "../repositories/carTypeRepository.js";

const carTypeRepository = new CarTypeRepository();

export class CarTypeService {
    async create(carTypeDTO) {
        const newCarType = await carTypeRepository.create(carTypeDTO);
        return newCarType;
    }

    async update(carTypeDTO) {
        const carType = await carTypeRepository.update(carTypeDTO);
        return carType;
    }

    async delete(carTypeDTO) {
        const carType = await carTypeRepository.delete(carTypeDTO);
        return carType;
    }

    async get(carTypeDTO) {
        const carType = await carTypeRepository.getById(carTypeDTO);
        return carType;
    }


    async all(req) {
        const carTypes = await carTypeRepository.all(req);
        return carTypes;
    }


    async getById(carTypeDTO) {
        const carType = await carTypeRepository.getById(carTypeDTO);
        return carType;
    }
}

export default CarTypeService;