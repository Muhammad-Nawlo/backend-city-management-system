import Property from "../models/Property.js";
import Role from "../models/Role.js";
import NotFoundError from "../errors/notFoundError.js";
import {now} from "mongoose";

class UserRepository {
    async create(userDTO) {
        const newUser = new Property({
            email: userDTO.email,
            password: userDTO.password,
            phoneNumber: userDTO.phoneNumber,
            username: userDTO.username
        });
        newUser.setPassword(userDTO.password);
        const user = await newUser.save();
        return user;
    }

    async update(userDTO) {
        const user = await Property.findByIdAndUpdate(userDTO.id, {
                email: userDTO.email,
                phoneNumber: userDTO.phoneNumber,
                username: userDTO.username
            }, {
                new: true
            }
        );
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async delete(userDTO) {
        const user = await Property.findByIdAndDelete(userDTO.id);
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getById(userDTO) {
        const user = await Property.findById(userDTO.id);
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByUsername(userDTO) {
        const user = await Property.findOne({username: userDTO.username});
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByEmail(userDTO) {
        const user = await Property.findOne({email: userDTO.email});
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByPhoneNumber(userDTO) {
        const user = await Property.findOne({phoneNumber: userDTO.phoneNumber});
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async getByToken(token) {
        const user = await Property.findOne({
            resetPasswordToken: token,
            resetPasswordExpires: {$gt: Date.now()}
        });
        if (!user) {
            throw new NotFoundError();
        }
        return user;
    }

    async all() {
        const user = await Property.find().populate('roles').limit(10).exec();
        return user;
    }

    async assignRole(userDTO, roleDTO) {
        const user = await Property.findById(userDTO.id);
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
