import User from "../models/User.js";
class UserRepository {
    async create(userDTO) {
        const newUser = new User({
            email: userDTO.email,
            password: userDTO.password,
            phoneNumber: userDTO.phoneNumber,
            username: userDTO.username
        });
        newUser.setPassword(userDTO.password);
        const user = await newUser.save();
        if (!user) {
            throw new Error(user);
        }
        return user;
    }

    async update(userDTO) {
        const user = await User.findByIdAndUpdate(userDTO.id, {
                    email: userDTO.email,
                    phoneNumber: userDTO.phoneNumber,
                    username: userDTO.username
                }, {
                    new: true
                }
            )
        ;
        if (!user) {
            throw new Error(user);
        }
        return user;
    }

    async delete(userDTO) {
        const user = await User.findByIdAndDelete(userDTO.id);
        if (!user) {
            throw new Error(user);
        }
        return user;
    }

    async getById(userDTO) {
        const user = await User.findById(userDTO.id)
        if (!user) {
            throw new Error(user);
        }
        return user;
    }

    async getByUsername(userDTO) {
        const user = await User.findOne({username: userDTO.username});
        if (!user) {
            throw new Error(user);
        }
        return user;
    }

    async getByEmail(userDTO) {
        const user = await User.findOne({email: userDTO.email});
        if (!user) {
            throw new Error(user);
        }
        return user;
    }

    async getByPhoneNumber(userDTO) {
        const user = await User.findOne({phoneNumber: userDTO.phoneNumber});
        if (!user) {
            throw new Error(user);
        }
        return user;
    }

    async all() {
        const user = await User.find().limit(10).exec();
        if (!user) {
            throw new Error(user);
        }
        return user;
    }
}

export default UserRepository;
