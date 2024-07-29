class CarTypeDTO {
    constructor(
        make = null,
        model = null,
        year = null,
        capacity = null,
        registrationNumber = null,
        price = null,
        status = null,
        images = null,
        color = null,
        type = null,
        id = null
    ) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.capacity = capacity;
        this.registrationNumber = registrationNumber;
        this.price = price;
        this.status = status;
        this.images = images;
        this.color = color;
        this.type = type;
        this.id = id;
    }
}

export default CarTypeDTO;