import mongoose from "mongoose";

import paginate from 'mongoose-paginate-v2';
import eventHandler from "../helpers/eventHandler.js";

const Schema = new mongoose.Schema({
    rentalId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false, ref: 'Rental'
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
    amount: {
        type: Number, allowNull: false, required: true
    }
}, {
    timestamps: true
});
Schema.pre('save', async function (next) {
    const tenant = await eventHandler({id: this.tenantId});
    this.tenant = tenant.result;

    next();
});
Schema.plugin(paginate);

const Payment = mongoose.model('Payment', Schema);
export default Payment;