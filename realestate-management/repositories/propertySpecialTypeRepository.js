import PropertySpecialType from "../models/PropertySpecialType.js";

import NotFoundError from "../errors/notFoundError.js";

class PropertySpecialTypeRepository {
    async create(propertySpecialTypeDTO) {
        const newPropertySpecialType = new PropertySpecialType({
            name: propertySpecialTypeDTO.name,
            description: propertySpecialTypeDTO.description,

        });
        const propertySpecialType = await newPropertySpecialType.save();
        return propertySpecialType;
    }

    async update(propertySpecialTypeDTO) {
        const propertySpecialType = await PropertySpecialType.findByIdAndUpdate(propertySpecialTypeDTO.id, {
                name: propertySpecialTypeDTO.name,
                description: propertySpecialTypeDTO.description,
            }, {
                new: true
            }
        );
        if (!propertySpecialType) {
            throw new NotFoundError();
        }
        return propertySpecialType;
    }

    async delete(propertySpecialTypeDTO) {
        const propertySpecialType = await PropertySpecialType.findByIdAndDelete(propertySpecialTypeDTO.id);
        if (!propertySpecialType) {
            throw new NotFoundError();
        }
        return propertySpecialType;
    }

    async getById(propertySpecialTypeDTO) {
        const propertySpecialType = await PropertySpecialType.findById(propertySpecialTypeDTO.id);
        if (!propertySpecialType) {
            throw new NotFoundError();
        }
        return propertySpecialType;
    }

    async all() {
        const propertySpecialTypes = await PropertySpecialType.find().limit(10).exec();
        return propertySpecialTypes;
    }
}

export default PropertySpecialTypeRepository;
