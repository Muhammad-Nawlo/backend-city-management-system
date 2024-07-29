import mongoose from "mongoose";
import * as crypto from "crypto";
import config from "../config/config.js";
import paginate from 'mongoose-paginate-v2';
const Schema = new mongoose.Schema({
    name: {
        type: String, allowNull: false, required: true
    },
    description: {
        type: String, allowNull: false,  required: true
    },
    phoneNumber: {
        type: String, allowNull: false,  required: true
    },
    image: {
        type: String, allowNull: true,
    },
    address: {
        type: String, allowNull: false, required: true
    },
}, {
    timestamps: true
});

Schema.virtual('fullImageUrl').get(function () {
    return `${config.fileUrl}${this.image}`;
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});

Schema.plugin(paginate);
const Restaurant = mongoose.model('Restaurant', Schema);
export default Restaurant;