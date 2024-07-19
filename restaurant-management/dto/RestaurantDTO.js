class RestaurantDTO {
    constructor(
        name = null,
        description = null,
        phoneNumber = null,
        address = null,
        image = null,
        id = null) {
        this.name = name;
        this.description = description;
        this.phoneNumber = phoneNumber;
        this.image = image;
        this.address = address;
        this.id = id;
    }
}

export default RestaurantDTO;