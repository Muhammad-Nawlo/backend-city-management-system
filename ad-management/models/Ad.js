import mongoose from "mongoose";
import config from "../config/config.js";
import paginate from "mongoose-paginate-v2";

const Schema = new mongoose.Schema({
    images: {
        type: Array, required: true
    },
    status: {
        type: Number, required: true, default: 1
    },
    withAuth: {
        type: Number, required: true, default: 1
    }
}, {timestamps: true});

Schema.virtual('fullImagesUrl').get(function () {
    return this.images.map(image => `${config.fileUrl}${image}`);
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});
Schema.plugin(paginate);


const Ad = mongoose.model('Ad', Schema);
export default Ad;