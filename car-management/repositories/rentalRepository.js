import Rental from "../models/Rental.js";

import NotFoundError from "../errors/notFoundError.js";

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
        const rental = await Rental.findById(rentalDTO.id);
        if (!rental) {
            throw new NotFoundError();
        }
        return rental;
    }

    async all() {
        const rentals = await Rental.find().limit(10).exec();
        return rentals;
    }
}

export default RentalRepository;
