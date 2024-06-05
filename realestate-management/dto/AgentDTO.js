class AgentDTO {
    constructor(email = null, username = null, phoneNumber = null, fullName = null, licenseNumber = null, id = null) {
        this.id = id;
        this.email = email;
        this.username = username;
        this.phoneNumber = phoneNumber;
        this.fullName = fullName;
        this.licenseNumber = licenseNumber;
    }
}

export default AgentDTO;