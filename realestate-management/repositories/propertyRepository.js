import Property from "../models/Property.js";

import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";
import Sale from "../models/Sale.js";
import Rental from "../models/Rental.js";
import mongoose from "mongoose";

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
            specialType: propertyDTO.specialType,
            agent: propertyDTO.agent,
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
        property.specialType = propertyDTO.specialType;

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
        const property = await Property.findById(propertyDTO.id).populate('agent');
        if (!property) {
            throw new NotFoundError();
        }
        return property;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: ['type', 'specialType', 'agent']
        };
        const searchOptions = searchHandler(req);
        const properties = await Property.find(searchOptions).paginate(options);
        return properties;
    }

    async userProperty(userId, req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: ['propertyId', 'agentId'],
        };


        const rentalProperties = await Rental.find({tenantId: new mongoose.Types.ObjectId(userId)}).paginate(options);
        const saleProperties = await Sale.find({
            buyerId: new mongoose.Types.ObjectId(userId)
        }).paginate(options);

        if (!rentalProperties && !saleProperties) {
            throw new NotFoundError();
        }

        return {
            rentalProperties,
            saleProperties
        };
    }
}

export default PropertyRepository;
