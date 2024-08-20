import mongoose from "mongoose";

import paginate from 'mongoose-paginate-v2';
import eventHandler from "../helpers/eventHandler.js";

const Schema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false, ref: 'Property'
    },
    tenantId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    agentId: {
        type: mongoose.Schema.ObjectId
    },
    agent: {
        type: Object
    },
    tenant: {
        type: Object
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

Schema.pre('save', async function (next) {
    const tenant = await eventHandler({id: this.tenantId});
    this.tenant = tenant.result;

    const agent = await eventHandler({id: this.agentId});
    this.agent = agent?.result;
    next();
});
Schema.plugin(paginate);
const Rental = mongoose.model('Rental', Schema);
export default Rental;