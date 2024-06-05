import PropertyDTO from "../dto/PropertyDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import PropertyService from "../services/PropertyService.js";

const propertyService = new PropertyService();


class PropertyController {
    async all(req, res, next) {
        const properties = await propertyService.all();
        return ResponseHelper.success(res, properties);
    }

    async create(req, res, next) {
        const {
            address,
            city,
            state,
            zipcode,
            type,
            description,
            status,
            price,
            surfaceArea,
            buildingArea,
            bedrooms,
            bathrooms,
            images
        } = req.body;
        const propertyDTO = new PropertyDTO(
            address,
            city,
            state,
            zipcode,
            type,
            description,
            status,
            price,
            surfaceArea,
            buildingArea,
            bedrooms,
            bathrooms,
            images);
        const newProperty = await propertyService.create(propertyDTO);
        if (!newProperty) {
            return next(res);
        }
        return ResponseHelper.created(res, newProperty);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {
            address,
            city,
            state,
            zipcode,
            type,
            description,
            status,
            price,
            surfaceArea,
            buildingArea,
            bedrooms,
            bathrooms,
            images
        } = req.body;
        const propertyDTO = new PropertyDTO(
            address,
            city,
            state,
            zipcode,
            type,
            description,
            status,
            price,
            surfaceArea,
            buildingArea,
            bedrooms,
            bathrooms,
            images,
            id);
        const property = await propertyService.update(propertyDTO);
        return ResponseHelper.success(res, property);
    }

    async delete(req, res, next) {
        const propertyDTO = new PropertyDTO();
        propertyDTO.id = req.params.id
        const property = await propertyService.delete(propertyDTO);

        return ResponseHelper.success(res, property);
    }

    async get(req, res, next) {
        const propertyDTO = new PropertyDTO();
        propertyDTO.id = req.params.id
        const property = await propertyService.get(propertyDTO);

        return ResponseHelper.success(res, property);
    }


}

export default PropertyController;