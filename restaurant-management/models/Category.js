import mongoose from "mongoose";
import * as crypto from "crypto";
import config from "../config/config.js";

const Schema = new mongoose.Schema({
    name: {
        type: String, allowNull: false, required: true
    },
    description: {
        type: String, allowNull: false, required: true
    },
    image: {
        type: String,
        allowNull: true,
    },
    restaurant: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Restaurant',
        required: true,
    },
}, {
    timestamps: true
});

Schema.virtual('fullImageUrl').get(function () {
    return `${config.fileUrl}${this.image}`;
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});


const Category = mongoose.model('Category', Schema);
export default Category;