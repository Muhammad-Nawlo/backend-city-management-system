class AdDTO {
    constructor(images = [null], status = null, withAuth = null, id = null) {
        this.id = id;
        this.images = images;
        this.status = status;
        this.withAuth = withAuth;
    }
}

export default AdDTO;