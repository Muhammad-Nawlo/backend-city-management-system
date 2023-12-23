class PermissionDTO {
    constructor(name = null, slug = null, id = null, guardName = 'api') {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.guardName = slug;
    }
}

export default PermissionDTO;