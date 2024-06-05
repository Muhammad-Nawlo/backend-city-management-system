class MaintenanceRequestDTO {
    constructor(
        propertyId = null,
        tenantId = null,
        date = null,
        description = null,
        image = null,
        status = null,
        id = null
    ) {
        this.propertyId = propertyId;
        this.tenantId = tenantId;
        this.date = date;
        this.description = description;
        this.image = image;
        this.status = status;
        this.id = id;
    }
}

export default MaintenanceRequestDTO;