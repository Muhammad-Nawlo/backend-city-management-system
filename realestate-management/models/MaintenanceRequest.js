import mongoose from "mongoose";
import config from "../config/config.js";
import paginate from 'mongoose-paginate-v2';
import eventHandler from "../helpers/eventHandler.js";

const Schema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    tenantId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    tenant: {
        type: Object
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
        type: String,
        allowNull: false,
        required: true,
        enum: ['New', 'In Progress', 'In Review', 'Resolved', 'Cancelled', 'Archived'],
        default: 'New'
    }
}, {
    timestamps: true
});

Schema.pre('save', async function (next) {
    const tenant = await eventHandler({id: this.tenantId});
    this.tenant = tenant.result;
    next();
});

Schema.virtual('fullImagesUrl').get(function () {
    return this.images?.map(image => `${config.fileUrl}${image}`);
})
Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});
Schema.plugin(paginate);

const MaintenanceRequest = mongoose.model('MaintenanceRequest', Schema);
export default MaintenanceRequest;