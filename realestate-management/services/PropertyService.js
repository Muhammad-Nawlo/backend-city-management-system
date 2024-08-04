import PropertyRepository from "../repositories/PropertyRepository.js";

const propertyRepository = new PropertyRepository();

export class PropertyService {
    async create(propertyDTO) {
        const newProperty = await propertyRepository.create(propertyDTO);
        return newProperty;
    }

    async update(propertyDTO) {
        const property = await propertyRepository.update(propertyDTO);
        return property;
    }

    async delete(propertyDTO) {
        const property = await propertyRepository.delete(propertyDTO);
        return property;
    }

    async get(propertyDTO) {
        const property = await propertyRepository.getById(propertyDTO);
        return property;
    }


    async all(req) {
        const properties = await propertyRepository.all(req);
        return properties;
    }


    async getById(propertyDTO) {
        const property = await propertyRepository.getById(propertyDTO);
        return property;
    }

    async userProperty(userId, req) {
        const userProperties = await propertyRepository.userProperty(userId, req);
        return userProperties;
    }
}

export default PropertyService;