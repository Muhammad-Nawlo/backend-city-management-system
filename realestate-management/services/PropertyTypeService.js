import PropertyTypeRepository from "../repositories/PropertyTypeRepository.js";

const propertyTypeRepository = new PropertyTypeRepository();

export class PropertyTypeService {
    async create(propertyTypeDTO) {
        const newPropertyType = await propertyTypeRepository.create(propertyTypeDTO);
        return newPropertyType;
    }

    async update(propertyTypeDTO) {
        const propertyType = await propertyTypeRepository.update(propertyTypeDTO);
        return propertyType;
    }

    async delete(propertyTypeDTO) {
        const propertyType = await propertyTypeRepository.delete(propertyTypeDTO);
        return propertyType;
    }

    async get(propertyTypeDTO) {
        const propertyType = await propertyTypeRepository.getById(propertyTypeDTO);
        return propertyType;
    }


    async all(req) {
        const propertyTypes = await propertyTypeRepository.all(req);
        return propertyTypes;
    }


    async getById(propertyTypeDTO) {
        const propertyType = await propertyTypeRepository.getById(propertyTypeDTO);
        return propertyType;
    }
}

export default PropertyTypeService;