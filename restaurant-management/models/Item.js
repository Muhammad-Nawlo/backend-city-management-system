import mongoose from "mongoose";
import * as crypto from "crypto";
import config from "../config/config.js";

import paginate from 'mongoose-paginate-v2';

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

Schema.plugin(paginate);

const Item = mongoose.model('Item', Schema);
export default Item;