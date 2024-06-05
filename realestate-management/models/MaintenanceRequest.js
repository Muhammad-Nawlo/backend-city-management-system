import mongoose from "mongoose";


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
    image: {
        type: String, allowNull: true
    },
    status: {
        type: Number, allowNull: false, default: 1
    }
}, {
    timestamps: true
});

const MaintenanceRequest = mongoose.model('MaintenanceRequest', Schema);
export default MaintenanceRequest;