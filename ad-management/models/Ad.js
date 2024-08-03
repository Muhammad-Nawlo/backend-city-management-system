import mongoose from "mongoose";
import config from "../config/config.js";
import paginate from "mongoose-paginate-v2";

const Schema = new mongoose.Schema({
    image: {
        type: String, required: true
    },
    link: {
        type: String
    },
    status: {
        type: String,
        enum: ['Available', 'Unavailable'],
        default: 'Available'
    },
    withAuth: {
        type: String,
        enum: ['True', 'False'],
        default: 'True'
    }
}, {timestamps: true});

Schema.virtual('fullImageUrl').get(function () {
    return `${config.fileUrl}${this.image}`;
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});

Schema.plugin(paginate);


const Ad = mongoose.model('Ad', Schema);
export default Ad;