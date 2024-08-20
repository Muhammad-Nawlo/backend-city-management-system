import mongoose from "mongoose";
import config from "../config/config.js";
import paginate from 'mongoose-paginate-v2';
import eventHandler from "../helpers/eventHandler.js";

const Schema = new mongoose.Schema({
    address: {
        type: String, allowNull: false, required: true
    },
    city: {
        type: String, allowNull: false, required: true
    },
    state: {
        type: String, allowNull: false, required: true
    },
    zipcode: {
        type: Number, allowNull: false, required: true
    },
    type: {
        type: mongoose.Types.ObjectId,
        ref: "PropertyType",
        required: true
    },
    specialType: {
        type: mongoose.Types.ObjectId,
        ref: "PropertySpecialType",
        required: true
    },
    description: {
        type: String, allowNull: false, required: true
    },
    status: {
        type: String,
        enum: ['Rented', 'Sold', 'Sale', 'Rent'],
        default: 'Sale'
    },
    price: {
        type: Number, required: true,
    },
    surfaceArea: {
        type: Number, required: true
    },
    buildingArea: {
        type: Number, required: true
    },
    bedrooms: {
        type: Number, required: true
    },
    bathrooms: {
        type: Number, required: true
    },
    images: {
        type: Array, required: true
    },
    agent: {
        type: mongoose.Types.ObjectId
    },
    agentId: {
        type: Object
    }
}, {
    timestamps: true
});

Schema.pre('save', async function (next) {

    const agentId = await eventHandler({id: this.agent});
    this.agentId= agentId?.result;
    next();
});
Schema.virtual('fullImagesUrl').get(function () {
    return this.images.map(image => `${config.fileUrl}${image}`);
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});
Schema.plugin(paginate);

const Property = mongoose.model('Property', Schema);
export default Property;