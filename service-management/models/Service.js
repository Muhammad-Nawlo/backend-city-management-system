import mongoose from "mongoose";
import config from "../config/config.js";
import paginate from "mongoose-paginate-v2";

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
        type: String,
        enum: ['Available', 'Unavailable'],
        default: 'Available'
    },
}, {timestamps: true});


Schema.virtual('fullImageUrl').get(function () {
    return `${config.fileUrl}${this.image}`;
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});

Schema.plugin(paginate)


const Service = mongoose.model('Service', Schema);
export default Service;