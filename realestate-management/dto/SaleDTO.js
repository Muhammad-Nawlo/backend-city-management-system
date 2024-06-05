class SaleDTO {
    constructor(
        propertyId = null,
        buyerId = null,
        agentId = null,
        date = null,
        price = null,
        id = null
    ) {
        this.propertyId = propertyId;
        this.buyerId = buyerId;
        this.agentId = agentId;
        this.date = date;
        this.price = price;
        this.id = id;
    }
}

export default SaleDTO;