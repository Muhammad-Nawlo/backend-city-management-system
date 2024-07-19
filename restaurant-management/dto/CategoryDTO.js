class CategoryDTO {
    constructor(
        name = null,
        description = null,
        restaurant = null,
        image = null,
        id = null
    ) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.restaurant = restaurant;
        this.id = id;
    }
}

export default CategoryDTO;