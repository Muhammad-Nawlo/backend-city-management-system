import Rental from "../models/Rental.js";

import NotFoundError from "../errors/notFoundError.js";
import { populate } from "dotenv";
import searchHandler from "../helpers/searchHandler.js";

class RentalRepository {
    async create(rentalDTO) {
        const newRental = new Rental({
            carId: rentalDTO.carId,
            userId: rentalDTO.userId,
            startDate: rentalDTO.startDate,
            endDate: rentalDTO.endDate,
            location: rentalDTO.location
        });
        const rental = await newRental.save();
        return rental;
    }

    async update(rentalDTO) {
        const rental = await Rental.findByIdAndUpdate(rentalDTO.id, {
            carId: rentalDTO.carId,
            userId: rentalDTO.userId,
            startDate: rentalDTO.startDate,
            endDate: rentalDTO.endDate,
            location: rentalDTO.location
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
        const rental = await Rental.findById(rentalDTO.id).populate([
            {
                path: "carId",
                populate: {
                    path:"type"
                }
            }
        ]);
        if (!rental) {
            throw new NotFoundError();
        }
        return rental;
    }

    async all(req) {
        // const {userId} = req.query;
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: {
                    path: 'carId',
                    populate: {
                        path: 'type',
                    }
                },
            
        };
        const searchOptions = searchHandler(req);
        // if(userId){
        //     searchOptions.user = userId;
        // }
        const rentals = await Rental.find(searchOptions).paginate(options);
        return rentals;
    }
}

export default RentalRepository;
