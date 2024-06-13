import User from "../models/User.js";
import Role from "../models/Role.js";
import NotFoundError from "../errors/notFoundError.js";
import {now} from "mongoose";

class UserRepository {
    async create(userDTO) {
        const newUser = new User({
            email: userDTO.email,
            password: userDTO.password,
            phoneNumber: userDTO.phoneNumber,
            username: userDTO.username,
            image: userDTO.image
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
        const user = await User.findById(userDTO.id);
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByUsername(userDTO) {
        const user = await User.findOne({username: userDTO.username});
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByEmail(userDTO) {
        const user = await User.findOne({email: userDTO.email});
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByPhoneNumber(userDTO) {
        const user = await User.findOne({phoneNumber: userDTO.phoneNumber});
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByToken(token) {
        const user = await User.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {$gt: Date.now()}
        });
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async all() {
        const user = await User.find().populate('roles').limit(10).exec();
        return user;
    }

    async assignRole(userDTO, roleDTO) {
        const user = await User.findById(userDTO.id);
        const role = await Role.findById(roleDTO.id);
        if (!user || !role) {
            throw new NotFoundError();
        }
        user.roles.push(role);
        const result = await user.save();
        return result;
    }
}

export default UserRepository;
