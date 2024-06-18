import mongoose from "mongoose";
import config from "../config/config.js";


const Schema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    tenantId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    date: {
        type: Date, required: true
    },
    description: {
        type: String, required: true
    },
    images: {
        type: Array, allowNull: true
    },
    status: {
        type: Number, allowNull: false, default: 1
    }
}, {
    timestamps: true
});

Schema.virtual('fullImagesUrl').get(function () {
    return this.images.map(image => `${config.fileUrl}${image}`);
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});


const MaintenanceRequest = mongoose.model('MaintenanceRequest', Schema);
export default MaintenanceRequest;