import mongoose from "mongoose";
import config from "../config/config.js";


const Schema = new mongoose.Schema({
    name: {
        type: String, required: true, allowNull: false
    },
    description: {
        type: String, required: true, allowNull: false
    }
}, {
    timestamps: true
});


const CarType = mongoose.model('CarType', Schema);
export default CarType;