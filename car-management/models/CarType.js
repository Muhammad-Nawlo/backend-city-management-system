import mongoose from "mongoose";
import config from "../config/config.js";

import paginate from 'mongoose-paginate-v2';
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
Schema.plugin(paginate);

const CarType = mongoose.model('CarType', Schema);
export default CarType;