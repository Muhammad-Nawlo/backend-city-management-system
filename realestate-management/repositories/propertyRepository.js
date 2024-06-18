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
        const property = await Property.findById(propertyDTO.id);
        if (!property) {
            throw new NotFoundError();
        }
        property.address = propertyDTO.address;
        property.city = propertyDTO.city;
        property.state = propertyDTO.state;
        property.zipcode = propertyDTO.zipcode;
        property.type = propertyDTO.type;
        property.description = propertyDTO.description;
        property.status = propertyDTO.status;
        property.price = propertyDTO.price;
        property.surfaceArea = propertyDTO.surfaceArea;
        property.buildingArea = propertyDTO.buildingArea;
        property.bedrooms = propertyDTO.bedrooms;
        property.bathrooms = propertyDTO.bathrooms;

        if (propertyDTO.images !== 'DONT_UPDATE') {
            property.images = propertyDTO.images;
        }
        await property.save();


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
