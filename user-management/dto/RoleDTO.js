class ModuleDTO {
    constructor(name = null, slug = null, id = null, permissions = []) {
        this.id = id;
        this.name = name;
        this.slug = slug;
        this.permissions = permissions;
    }
}

export default ModuleDTO;