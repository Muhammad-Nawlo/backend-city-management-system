class RentalDTO {
    constructor(
        carId = null,
        userId = null,
        startDate = null,
        endDate = null,
        location = null,
        status = 'Pending',
        id = null
    ) {
        this.carId = carId;
        this.userId = userId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
        this.status = status;
        this.id = id;
    }
}

export default RentalDTO;