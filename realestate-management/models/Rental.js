import mongoose from "mongoose";


const Schema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    tenantId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    agentId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    startDate: {
        type: Date, required: true, allowNull: false
    },
    endDate: {
        type: Date, required: true, allowNull: false
    },
    monthlyRent: {
        type: Number, required: true, allowNull: false
    }
}, {
    timestamps: true
});

const Rental = mongoose.model('Rental', Schema);
export default Rental;