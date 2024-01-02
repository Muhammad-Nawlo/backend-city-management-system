import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: {
        type: String,
        allowNull: false,
        required: true
    },
    slug: {
        type: String,
        allowNull: false,
        unique: true,
        required: true
    }
}, {timestamps: true});


const Service = mongoose.model('Service', Schema);
export default Service;