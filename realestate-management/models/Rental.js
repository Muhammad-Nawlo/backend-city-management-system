import mongoose from "mongoose";

import paginate from 'mongoose-paginate-v2';
const Schema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false,ref:'Property'
    },
    tenantId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    agentId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false,ref:'Agent'
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
Schema.plugin(paginate);
const Rental = mongoose.model('Rental', Schema);
export default Rental;