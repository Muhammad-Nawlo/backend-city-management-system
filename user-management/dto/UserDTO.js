class UserDTO {
    constructor(username = null, email = null, phoneNumber = null, password = null, image = null, id = null, roles = []) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
        this.roles = roles;
        this.image = image;
    }
}

export default UserDTO;