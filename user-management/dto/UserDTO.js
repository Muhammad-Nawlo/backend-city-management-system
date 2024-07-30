class UserDTO {
    constructor(username = null, email = null, phoneNumber = null, password = null, image = null, role = null, id = null) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.role = role;
        this.image = image;
    }
}

export default UserDTO;