class ItemDTO {
    constructor(
        name = null,
        price = null,
        category = null,
        description = null,
        image = null,
        id = null) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
        this.description = description;
        this.image = image;
    }
}

export default ItemDTO;