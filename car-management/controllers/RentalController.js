import RentalDTO from "../dto/RentalDTO.js";
import ResponseHelper from "../helpers/responseHelper.js";
import RentalService from "../services/RentalService.js";

const rentalService = new RentalService();

class RentalController {
    async all(req, res, next) {
        const rentals = await rentalService.all(req);
        return ResponseHelper.success(res, rentals);
    }

    async create(req, res, next) {
        const {
            carId,
            userId,
            startDate,
            endDate,
            location
        } = req.body;
        const rentalDTO = new RentalDTO(carId,
            userId,
            startDate,
            endDate,
            location
        );
        const newRental = await rentalService.create(rentalDTO);
        if (!newRental) {
            return next(res);
        }
        return ResponseHelper.created(res, newRental);
    }

    async update(req, res, next) {
        const {id} = req.params;
        const {
            carId,
            userId,
            startDate,
            endDate,
            location
        } = req.body;
        const rentalDTO = new RentalDTO(carId,
            userId,
            startDate,
            endDate,
            location,
            id
        );
        const rental = await rentalService.update(rentalDTO);
        return ResponseHelper.success(res, rental);
    }

    async delete(req, res, next) {
        const rentalDTO = new RentalDTO();
        rentalDTO.id = req.params.id
        const rental = await rentalService.delete(rentalDTO);

        return ResponseHelper.success(res, rental);
    }

    async get(req, res, next) {
        const rentalDTO = new RentalDTO();
        rentalDTO.id = req.params.id
        const rental = await rentalService.get(rentalDTO);

        return ResponseHelper.success(res, rental);
    }

}

export default RentalController;