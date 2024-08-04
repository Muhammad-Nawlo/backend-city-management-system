class PropertyDTO {
    constructor(
        address = null,
        city = null,
        state = null,
        zipcode = null,
        type = null,
        description = null,
        status = null,
        price = null,
        surfaceArea = null,
        buildingArea = null,
        bedrooms = null,
        bathrooms = null,
        images = null,
        specialType = null,
        agent = null,
        id = null
    ) {
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.type = type;
        this.description = description;
        this.status = status;
        this.price = price;
        this.surfaceArea = surfaceArea;
        this.buildingArea = buildingArea;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.images = images;
        this.specialType = specialType;
        this.agent = agent;
        this.id = id;
    }
}

export default PropertyDTO;