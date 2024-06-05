import mongoose from "mongoose";


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
    }
}, {
    timestamps: true
});


const Agent = mongoose.model('Agent', Schema);
export default Agent;