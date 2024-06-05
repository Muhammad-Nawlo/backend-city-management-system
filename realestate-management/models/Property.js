import mongoose from "mongoose";


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
        required: true
    },
    description: {
        type: String, allowNull: false, required: true
    },
    status: {
        type: Number, required: true, default: 1
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
    }
}, {
    timestamps: true
});


const Property = mongoose.model('Property', Schema);
export default Property;