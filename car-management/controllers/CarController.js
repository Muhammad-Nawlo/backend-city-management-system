import CarDTO from "../dto/CarDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import CarService from "../services/CarService.js";
import UploadFiles from "../helpers/uploadFiles.js";

const carService = new CarService();

class CarController {
    async all(req, res, next) {
        const cars = await carService.all(req);
        return ResponseHelper.success(res, cars);
    }

    async create(req, res, next) {
        const imagesPath = await UploadFiles(req);

        const {
            make,
            model,
            year,
            capacity,
            registrationNumber,
            price,
            status,
            color,
            type,

        } = req.body;
        const carDTO = new CarDTO(make,
            model,
            year,
            capacity,
            registrationNumber,
            price,
            status,
            imagesPath,
            color, type);
        const newCar = await carService.create(carDTO);
        if (!newCar) {
            return next(res);
        }
        return ResponseHelper.created(res, newCar);
    }

    async update(req, res, next) {
        const imagesPath = await UploadFiles(req, true);

        const {id} = req.params;
        const {
            make,
            model,
            year,
            capacity,
            registrationNumber,
            price,
            status,
            color,
            type
        } = req.body;
        const carDTO = new CarDTO(make,
            model,
            year,
            capacity,
            registrationNumber,
            price,
            status,
            imagesPath,
            color, type, id);
        const car = await carService.update(carDTO);
        return ResponseHelper.success(res, car);
    }

    async delete(req, res, next) {
        const carDTO = new CarDTO();
        carDTO.id = req.params.id
        const car = await carService.delete(carDTO);

        return ResponseHelper.success(res, car);
    }

    async get(req, res, next) {
        const carDTO = new CarDTO();
        carDTO.id = req.params.id
        const car = await carService.get(carDTO);

        return ResponseHelper.success(res, car);
    }

    async changeStatus(req, res, next) {
        const {status} = req.body;
        const carDTO = new CarDTO();
        carDTO.id = req.params.id;
        carDTO.status = status
        const car = await carService.changeStatus(carDTO);

        return ResponseHelper.success(res, car);
    }

}

export default CarController;