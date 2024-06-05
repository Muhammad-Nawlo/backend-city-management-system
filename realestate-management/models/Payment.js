import mongoose from "mongoose";


const Schema = new mongoose.Schema({
    rentalId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
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

const Payment = mongoose.model('Payment', Schema);
export default Payment;