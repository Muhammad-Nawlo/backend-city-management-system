class OrderDTO {
    constructor(
        items = null,
        user = null,
        note = null,
        status = 'Pending',
        id = null,
    ) {
        this.items = items;
        this.user = user;
        this.status = status;
        this.note = note;
        this.id = id;
    }
}

export default OrderDTO;