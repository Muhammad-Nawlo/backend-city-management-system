import mongoose from "mongoose";
import paginate from 'mongoose-paginate-v2';

const Schema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false, ref: "Property"
    },
    buyerId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    agentId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false, ref: 'Agent'
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
Schema.plugin(paginate);
const Sale = mongoose.model('Sale', Schema);
export default Sale;