class RentalDTO {
    constructor(
        carId = null,
        userId = null,
        startDate = null,
        endDate = null,
        location = null,
        id = null
    ) {
        this.carId = carId;
        this.userId = userId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.id = id;
    }
}

export default RentalDTO;