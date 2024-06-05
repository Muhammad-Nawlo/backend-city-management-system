import PropertyTypeDTO from "../dto/PropertyTypeDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import PropertyTypeService from "../services/PropertyTypeService.js";


const propertyTypeService = new PropertyTypeService();

class PropertyTypeController {
    async all(req, res, next) {
        const propertyTypes = await propertyTypeService.all();
        return ResponseHelper.success(res, propertyTypes);
    }

    async create(req, res, next) {
        const {name, description} = req.body;
        const propertyTypeDTO = new PropertyTypeDTO(name, description);
        const newPropertyType = await propertyTypeService.create(propertyTypeDTO);
        if (!newPropertyType) {
            return next(res);
        }
        return ResponseHelper.created(res, newPropertyType);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {name, description} = req.body;
        const propertyTypeDTO = new PropertyTypeDTO(name, description, id);
        const propertyType = await propertyTypeService.update(propertyTypeDTO);
        return ResponseHelper.success(res, propertyType);
    }

    async delete(req, res, next) {
        const propertyTypeDTO = new PropertyTypeDTO();
        propertyTypeDTO.id = req.params.id
        const propertyType = await propertyTypeService.delete(propertyTypeDTO);

        return ResponseHelper.success(res, propertyType);
    }

    async get(req, res, next) {
        const propertyTypeDTO = new PropertyTypeDTO();
        propertyTypeDTO.id = req.params.id
        const propertyType = await propertyTypeService.get(propertyTypeDTO);

        return ResponseHelper.success(res, propertyType);
    }

}

export default PropertyTypeController;