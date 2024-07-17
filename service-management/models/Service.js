import mongoose from "mongoose";
import config from "../config/config.js";

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
    },
    description: {
        type: String,
        allowNull: false,
        required: true
    },
    image: {
        type: String,
        allowNull: true,
    },
    status: {
        type: Number, required: true, default: 1
    },
}, {timestamps: true});


Schema.virtual('fullImageUrl').get(function () {
    return `${config.fileUrl}${this.image}`;
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});

const Service = mongoose.model('Service', Schema);
export default Service;