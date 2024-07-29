import CarRepository from "../repositories/CarRepository.js";

const carRepository = new CarRepository();

export class CarService {
    async create(carDTO) {
        const newCar = await carRepository.create(carDTO);
        return newCar;
    }

    async update(carDTO) {
        const car = await carRepository.update(carDTO);
        return car;
    }

    async delete(carDTO) {
        const car = await carRepository.delete(carDTO);
        return car;
    }

    async get(carDTO) {
        const car = await carRepository.getById(carDTO);
        return car;
    }


    async all(req) {
        const cars = await carRepository.all(req);
        return cars;
    }


    async getById(carDTO) {
        const car = await carRepository.getById(carDTO);
        return car;
    }
}

export default CarService;