class UserDTO {
    constructor(username = null, email = null, phoneNumber = null, password = null, id = null) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.password = password;
    }
}

export default UserDTO;