import PropertyTypeRepository from "../repositories/PropertyTypeRepository.js";
import PropertySpecialTypeRepository from "../repositories/propertySpecialTypeRepository.js";

const propertySpecialTypeRepository = new PropertySpecialTypeRepository();

export class PropertySpecialTypeService {
    async create(propertySpecialTypeDTO) {
        const newPropertyType = await propertySpecialTypeRepository.create(propertySpecialTypeDTO);
        return newPropertyType;
    }

    async update(propertySpecialTypeDTO) {
        const propertySpecialType = await propertySpecialTypeRepository.update(propertySpecialTypeDTO);
        return propertySpecialType;
    }

    async delete(propertySpecialTypeDTO) {
        const propertySpecialType = await propertySpecialTypeRepository.delete(propertySpecialTypeDTO);
        return propertySpecialType;
    }

    async get(propertySpecialTypeDTO) {
        const propertySpecialType = await propertySpecialTypeRepository.getById(propertySpecialTypeDTO);
        return propertySpecialType;
    }


    async all() {
        const propertySpecialTypes = await propertySpecialTypeRepository.all();
        return propertySpecialTypes;
    }


    async getById(propertySpecialTypeDTO) {
        const propertySpecialType = await propertySpecialTypeRepository.getById(propertySpecialTypeDTO);
        return propertySpecialType;
    }
}

export default PropertySpecialTypeService;