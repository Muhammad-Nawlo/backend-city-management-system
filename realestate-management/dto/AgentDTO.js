class AgentDTO {
    constructor(email = null, username = null, phoneNumber = null, fullName = null, licenseNumber = null, image = null, id = null) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.fullName = fullName;
        this.licenseNumber = licenseNumber;
        this.image = image;
    }
}

export default AgentDTO;