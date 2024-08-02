import PropertyType from "../models/PropertyType.js";

import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";

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

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10
        };
        const searchOptions = searchHandler(req);
        const propertyTypes = await PropertyType.find(searchOptions).paginate(options);
        return propertyTypes;
    }
}

export default PropertyTypeRepository;
