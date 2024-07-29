import mongoose from "mongoose";

import paginate from 'mongoose-paginate-v2';

const Schema = new mongoose.Schema({
    rentalId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false, ref: 'Rental'
    },
    tenantId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
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
Schema.plugin(paginate);

const Payment = mongoose.model('Payment', Schema);
export default Payment;