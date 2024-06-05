class PaymentDTO {
    constructor(rentalId = null, tenantId = null, date = null, amount, id = null) {
        this.id = id;
        this.rentalId = rentalId;
        this.tenantId = tenantId;
        this.date = date;
        this.amount = amount;
    }
}

export default PaymentDTO;