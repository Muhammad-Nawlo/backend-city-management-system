import CarTypeDTO from "../dto/CarTypeDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import CarTypeService from "../services/CarTypeService.js";


const carTypeService = new CarTypeService();

class CarTypeController {
    async all(req, res, next) {
        const carTypes = await carTypeService.all();
        return ResponseHelper.success(res, carTypes);
    }

    async create(req, res, next) {
        const {name, description} = req.body;
        const carTypeDTO = new CarTypeDTO(name, description);
        const newCarType = await carTypeService.create(carTypeDTO);
        if (!newCarType) {
            return next(res);
        }
        return ResponseHelper.created(res, newCarType);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {name, description} = req.body;
        const carTypeDTO = new CarTypeDTO(name, description, id);
        const carType = await carTypeService.update(carTypeDTO);
        return ResponseHelper.success(res, carType);
    }

    async delete(req, res, next) {
        const carTypeDTO = new CarTypeDTO();
        carTypeDTO.id = req.params.id
        const carType = await carTypeService.delete(carTypeDTO);

        return ResponseHelper.success(res, carType);
    }

    async get(req, res, next) {
        const carTypeDTO = new CarTypeDTO();
        carTypeDTO.id = req.params.id
        const carType = await carTypeService.get(carTypeDTO);

        return ResponseHelper.success(res, carType);
    }

}

export default CarTypeController;