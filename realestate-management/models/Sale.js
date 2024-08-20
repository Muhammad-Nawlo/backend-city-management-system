import mongoose from "mongoose";
import paginate from 'mongoose-paginate-v2';
import eventHandler from "../helpers/eventHandler.js";

const Schema = new mongoose.Schema({
    propertyId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false, ref: "Property"
    },
    buyerId: {
        type: mongoose.Schema.ObjectId, required: true, allowNull: false
    },
    agentId: {
        type: mongoose.Schema.ObjectId,
    },
    buyer: {
        type: Object
    },
    agent: {
        type: Object
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
Schema.pre('save', async function (next) {
    const buyer = await eventHandler({id: this.buyerId});
    this.buyer = buyer.result;

    const agent = await eventHandler({id: this.agentId});
    this.agent = agent?.result;
    next();
});
Schema.plugin(paginate);
const Sale = mongoose.model('Sale', Schema);
export default Sale;