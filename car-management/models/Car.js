import mongoose from "mongoose";
import config from "../config/config.js";


const Schema = new mongoose.Schema({
    make: {
        type: String, allowNull: false, required: true
    },
    model: {
        type: String, allowNull: false, required: true
    },
    year: {
        type: String, allowNull: false, required: true
    },
    type: {
        type: mongoose.Types.ObjectId, ref: 'CarType', allowNull: false, required: true
    },
    capacity: {
        type: Number, required: true, allowNull: false, min: 1, max: 50
    },
    registrationNumber: {
        type: String, required: true, allowNull: false
    },
    price: {
        type: Number, required: true, allowNull: false, min: 1, max: 100000000
    },
    status: {
        type: Number, required: true, allowNull: false, default: 0
    },
    images: {
        type: [], required: true, allowNull: false
    },
    color: {
        type: String, required: true, allowNull: false
    }
}, {
    timestamps: true
});

Schema.virtual('fullImagesUrl').get(function () {
    return this.images.map(function (image) {
        return `${config.fileUrl}${image}`;
    });
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});


const Car = mongoose.model('Car', Schema);
export default Car;