class MaintenanceRequestDTO {
    constructor(
        propertyId = null,
        tenantId = null,
        date = null,
        description = null,
        images = null,
        status = null,
        id = null
    ) {
        this.propertyId = propertyId;
        this.tenantId = tenantId;
        this.date = date;
        this.description = description;
        this.images = images;
        this.status = status;
        this.id = id;
    }
}

export default MaintenanceRequestDTO;