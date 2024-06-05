import PropertyType from "../models/PropertyType.js";

import NotFoundError from "../errors/notFoundError.js";

class PropertyTypeRepository {
    async create(propertyTypeDTO) {
        const newPropertyType = new PropertyType({
            name: propertyTypeDTO.name,
            description: propertyTypeDTO.description,

        });
        const propertyType = await newPropertyType.save();
        return propertyType;
    }

    async update(propertyTypeDTO) {
        const propertyType = await PropertyType.findByIdAndUpdate(propertyTypeDTO.id, {
                name: propertyTypeDTO.name,
                description: propertyTypeDTO.description,
            }, {
                new: true
            }
        );
        if (!propertyType) {
            throw new NotFoundError();
        }
        return propertyType;
    }

    async delete(propertyTypeDTO) {
        const propertyType = await PropertyType.findByIdAndDelete(propertyTypeDTO.id);
        if (!propertyType) {
            throw new NotFoundError();
        }
        return propertyType;
    }

    async getById(propertyTypeDTO) {
        const propertyType = await PropertyType.findById(propertyTypeDTO.id);
        if (!propertyType) {
            throw new NotFoundError();
        }
        return propertyType;
    }

    async all() {
        const propertyTypes = await PropertyType.find().limit(10).exec();
        return propertyTypes;
    }
}

export default PropertyTypeRepository;
