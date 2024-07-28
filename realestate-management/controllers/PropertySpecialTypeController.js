import PropertySpecialTypeDTO from "../dto/PropertySpecialTypeDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import PropertySpecialTypeService from "../services/PropertySpecialTypeService.js";


const propertySpecialTypeService = new PropertySpecialTypeService();

class PropertySpecialTypeController {
    async all(req, res, next) {
        const propertySpecialTypes = await propertySpecialTypeService.all(req);
        return ResponseHelper.success(res, propertySpecialTypes);
    }

    async create(req, res, next) {
        const {name, description} = req.body;
        const propertySpecialTypeDTO = new PropertySpecialTypeDTO(name, description);
        const newPropertySpecialType = await propertySpecialTypeService.create(propertySpecialTypeDTO);
        if (!newPropertySpecialType) {
            return next(res);
        }
        return ResponseHelper.created(res, newPropertySpecialType);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {name, description} = req.body;
        const propertySpecialTypeDTO = new PropertySpecialTypeDTO(name, description, id);
        const propertySpecialType = await propertySpecialTypeService.update(propertySpecialTypeDTO);
        return ResponseHelper.success(res, propertySpecialType);
    }

    async delete(req, res, next) {
        const propertySpecialTypeDTO = new PropertySpecialTypeDTO();
        propertySpecialTypeDTO.id = req.params.id
        const propertySpecialType = await propertySpecialTypeService.delete(propertySpecialTypeDTO);

        return ResponseHelper.success(res, propertySpecialType);
    }

    async get(req, res, next) {
        const propertySpecialTypeDTO = new PropertySpecialTypeDTO();
        propertySpecialTypeDTO.id = req.params.id
        const propertySpecialType = await propertySpecialTypeService.get(propertySpecialTypeDTO);

        return ResponseHelper.success(res, propertySpecialType);
    }

}

export default PropertySpecialTypeController;