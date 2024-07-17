class ServiceDTO {
    constructor(name = null, slug = null, description = null, image = null, status = null, id = null) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.description = description;
        this.image = image;
        this.status = status;
    }
}

export default ServiceDTO;