class RentalDTO {
    constructor(
        propertyId = null,
        tenantId = null,
        agentId = null,
        startDate = null,
        endDate = null,
        monthlyRent = null,
        id = null
    ) {
        this.propertyId = propertyId;
        this.tenantId = tenantId;
        this.agentId = agentId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.monthlyRent = monthlyRent;
        this.id = id;
    }
}

export default RentalDTO;