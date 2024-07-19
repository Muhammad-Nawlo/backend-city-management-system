class OrderDTO {
    constructor(
        items = null,
        user = null,
        status = 'Pending',
        id = null,
    ) {
        this.items = items;
        this.user = user;
        this.status = status;
        this.id = id;
    }
}

export default OrderDTO;