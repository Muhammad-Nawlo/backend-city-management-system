class AdDTO {
    constructor(image = null, status = null, withAuth = null, link = null, id = null) {
        this.id = id;
        this.image = image;
        this.link = link;
        this.status = status;
        this.withAuth = withAuth;
    }
}

export default AdDTO;