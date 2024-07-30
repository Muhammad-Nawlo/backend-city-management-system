import User from "../models/User.js";
import Role from "../models/Role.js";
import NotFoundError from "../errors/notFoundError.js";
import searchHandler from "../helpers/searchHandler.js";

class UserRepository {
    async create(userDTO) {
        const newUser = new User({
            email: userDTO.email,
            password: userDTO.password,
            phoneNumber: userDTO.phoneNumber,
            username: userDTO.username,
            image: userDTO.image,
            role: userDTO.role
        });
        newUser.setPassword(userDTO.password);
        const user = await newUser.save();
        return user;
    }

    async update(userDTO) {
        const user = await User.findById(userDTO.id)
        if (!user) {
            throw new NotFoundError();
        }
        user.email = userDTO.email;
        user.phoneNumber = userDTO.phoneNumber;
        user.username = userDTO.username;
        user.role = userDTO.role;
        if (userDTO.password) {
            user.password = userDTO.password;
        }
        if (userDTO.image !== 'DONT_UPDATE') {
            user.image = userDTO.image;
        }
        await user.save();

        return user;
    }

    async delete(userDTO) {
        const user = await User.findByIdAndDelete(userDTO.id);
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getById(userDTO) {
        const user = await User.findById(userDTO.id).populate('role');
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByUsername(userDTO) {
        const user = await User.findOne({ username: userDTO.username }).populate('role');
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByEmail(userDTO) {
        const user = await User.findOne({ email: userDTO.email }).populate('role');
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByPhoneNumber(userDTO) {
        const user = await User.findOne({ phoneNumber: userDTO.phoneNumber }).populate('role');
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByToken(token) {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: { $gt: Date.now() }
        }).populate('role');
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async all(req) {
        const options = {
            page: req.query.page || 1,
            limit: req.query.items || 10,
            populate: 'role'
        };

        const searchOptions = searchHandler(req);

        const user = await User.find(searchOptions).paginate(options);
        return user;
    }
}

export default UserRepository;
