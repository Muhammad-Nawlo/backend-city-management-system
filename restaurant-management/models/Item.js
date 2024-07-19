import mongoose from "mongoose";
import * as crypto from "crypto";
import config from "../config/config.js";

const Schema = new mongoose.Schema({
    name: {
        type: String, allowNull: false, required: true
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Category',
        required: true
    },
    description: {
        type: String,
        required: true
    }, image: {
        type: String,
        allowNull: true,
    },
}, {
    timestamps: true
});

Schema.virtual('fullImageUrl').get(function () {
    return `${config.fileUrl}${this.image}`;
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});


const Item = mongoose.model('Item', Schema);
export default Item;