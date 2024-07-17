import mongoose from "mongoose";
import * as crypto from "crypto";
import config from "../config/config.js";

const Schema = new mongoose.Schema({
    username: {
        type: String, allowNull: false, unique: true, required: true
    },
    email: {
        type: String, allowNull: false, unique: true, required: true
    },
    phoneNumber: {
        type: String, allowNull: false, unique: true, required: true
    },
    image: {
        type: String,
        allowNull: true,
    },
    verifiedAt: {
        type: Date, allowNull: true,
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    verifyToken: String,
    verifyTokenExpires: Date,
    status: {
        type: Number, required: true, default: 1
    },
    hash: {
        type: String, allowNull: false, required: true
    },
    salt: {
        type: String, allowNull: false, required: true
    },
    roles: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Role',
    }],
}, {
    timestamps: true
});

// Method to set salt and hash the password for a user
Schema.methods.setPassword = function (password) {

    // Creating a unique salt for a particular user
    this.salt = crypto.randomBytes(16).toString('hex');

    // Hashing user's salt and password with 1000 iterations,

    this.hash = crypto.pbkdf2Sync(password, this.salt,
        1000, 64, `sha512`).toString(`hex`);
};

// Method to check the entered password is correct or not
Schema.methods.validPassword = function (password) {
    const hash = crypto.pbkdf2Sync(password,
        this.salt, 1000, 64, `sha512`).toString(`hex`);
    return this.hash === hash;
};

Schema.methods.generateResetToken = function () {
    this.resetPasswordToken = crypto.randomBytes(20).toString('hex');
    this.resetPasswordExpires = Date.now() + Math.round(config.tokenExpiredTime * 3600000);
}

Schema.methods.generateVerifyToken = function () {
    this.verifyToken = crypto.randomBytes(20).toString('hex');
    this.verifyTokenExpires = Date.now() + Math.round(config.tokenExpiredTime * 3600000);
}

Schema.virtual('fullImageUrl').get(function () {
    return `${config.fileUrl}${this.image}`;
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});


const User = mongoose.model('User', Schema);
export default User;