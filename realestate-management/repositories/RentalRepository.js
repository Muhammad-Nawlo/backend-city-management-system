import Rental from "../models/Rental.js";

import NotFoundError from "../errors/notFoundError.js";
import { populate } from "dotenv";

class RentalRepository {
    async create(rentalDTO) {
        const newRental = new Rental({
            propertyId: rentalDTO.propertyId,
            tenantId: rentalDTO.tenantId,
            agentId: rentalDTO.agentId,
            startDate: rentalDTO.startDate,
            endDate: rentalDTO.endDate,
            monthlyRent: rentalDTO.monthlyRent
        });
        const rental = await newRental.save();
        return rental;
    }

    async update(rentalDTO) {
        const rental = await Rental.findByIdAndUpdate(rentalDTO.id, {
            propertyId: rentalDTO.propertyId,
            tenantId: rentalDTO.tenantId,
            agentId: rentalDTO.agentId,
            startDate: rentalDTO.startDate,
            endDate: rentalDTO.endDate,
            monthlyRent: rentalDTO.monthlyRent
        }, {
            new: true
        }
        );
        if (!rental) {
            throw new NotFoundError();
        }
        return rental;
    }

    async delete(rentalDTO) {
        const rental = await Rental.findByIdAndDelete(rentalDTO.id);
        if (!rental) {
            throw new NotFoundError();
        }
        return rental;
    }

    async getById(rentalDTO) {
        const rental = await Rental.findById(rentalDTO.id);
        if (!rental) {
            throw new NotFoundError();
        }
        return rental;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: ['agentId', 'propertyId']
        };
        const rentals = await Rental.find().paginate(options);
        return rentals;
    }
}

export default RentalRepository;
