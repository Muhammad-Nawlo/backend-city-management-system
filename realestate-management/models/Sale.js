import mongoose from "mongoose";


const Schema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    buyerId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    agentId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    date: {
        type: Date, required: true
    },
    price: {
        type: String, allowNull: false, required: true
    }
}, {
    timestamps: true
});

const Sale = mongoose.model('Sale', Schema);
export default Sale;