import mongoose from "mongoose";
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
    fullName: {
        type: String, allowNull: false, required: true
    },
    licenseNumber: {
        type: String, required: true, allowNull: false
    },
    image: {
        type: String, required: true, allowNull: false
    }
}, {
    timestamps: true
});
Schema.virtual('fullImageUrl').get(function () {
    return `${config.fileUrl}${this.image}`;
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});


const Agent = mongoose.model('Agent', Schema);
export default Agent;