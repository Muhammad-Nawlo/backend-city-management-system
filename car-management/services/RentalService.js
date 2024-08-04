import RentalRepository from "../repositories/rentalRepository.js";

const rentalRepository = new RentalRepository();

export class RentalService {
    async create(rentalDTO) {
        const newRental = await rentalRepository.create(rentalDTO);
        return newRental;
    }

    async update(rentalDTO) {
        const rental = await rentalRepository.update(rentalDTO);
        return rental;
    }

    async delete(rentalDTO) {
        const rental = await rentalRepository.delete(rentalDTO);
        return rental;
    }

    async get(rentalDTO) {
        const rental = await rentalRepository.getById(rentalDTO);
        return rental;
    }


    async all(req) {
        const rentals = await rentalRepository.all(req);
        return rentals;
    }


    async getById(rentalDTO) {
        const rental = await rentalRepository.getById(rentalDTO);
        return rental;
    }

    async rentalUser(userId,req) {
        const rental = await rentalRepository.rentalUser(userId,req);
        return rental;
    }
}

export default RentalService;