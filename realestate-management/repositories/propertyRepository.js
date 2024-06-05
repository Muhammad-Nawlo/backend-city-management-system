import Property from "../models/Property.js";

import NotFoundError from "../errors/notFoundError.js";

class PropertyRepository {
    async create(propertyDTO) {
        const newProperty = new Property({
            address: propertyDTO.address,
            city: propertyDTO.city,
            state: propertyDTO.state,
            zipcode: propertyDTO.zipcode,
            type: propertyDTO.type,
            description: propertyDTO.description,
            status: propertyDTO.status,
            price: propertyDTO.price,
            surfaceArea: propertyDTO.surfaceArea,
            buildingArea: propertyDTO.buildingArea,
            bedrooms: propertyDTO.bedrooms,
            bathrooms: propertyDTO.bathrooms,
            images: propertyDTO.images,
        });
        const property = await newProperty.save();
        return property;
    }

    async update(propertyDTO) {
        const property = await Property.findByIdAndUpdate(propertyDTO.id, {
                address: propertyDTO.address,
                city: propertyDTO.city,
                state: propertyDTO.state,
                zipcode: propertyDTO.zipcode,
                type: propertyDTO.type,
                description: propertyDTO.description,
                status: propertyDTO.status,
                price: propertyDTO.price,
                surfaceArea: propertyDTO.surfaceArea,
                buildingArea: propertyDTO.buildingArea,
                bedrooms: propertyDTO.bedrooms,
                bathrooms: propertyDTO.bathrooms,
                images: propertyDTO.images,
            }, {
                new: true
            }
        );
        if (!property) {
            throw new NotFoundError();
        }
        return property;
    }

    async delete(propertyDTO) {
        const property = await Property.findByIdAndDelete(propertyDTO.id);
        if (!property) {
            throw new NotFoundError();
        }
        return property;
    }

    async getById(propertyDTO) {
        const property = await Property.findById(propertyDTO.id);
        if (!property) {
            throw new NotFoundError();
        }
        return property;
    }

    async all() {
        const properties = await Property.find().limit(10).exec();
        return properties;
    }
}

export default PropertyRepository;
