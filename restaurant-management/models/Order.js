import mongoose from "mongoose";
import Item from "./Item.js";
import paginate from 'mongoose-paginate-v2';

const Schema = new mongoose.Schema({
    items: [{
        item: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item',
            required: true
        },
        quantity: {
            type: Number,
            required: true,
            min: 1
        },
        note: {
            type: String,
            allowNull: true
        }
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    totalAmount: {
        type: Number,
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    totalPrice: {
        type: Number,
    },
    note: {
        type: String,
        allowNull: true
    }
}, {
    timestamps: true
});

Schema.pre('save', async function (next) {
    if (!this._id) {

        let totalPrice = 0;
        for (let i = 0; i < this.items.length; i++) {
            const item = await Item.findById(this.items[i].item)
            totalPrice += item.price * this.items[i].quantity;
        }
        this.totalPrice = totalPrice;
        this.totalAmount = this.items.reduce(function (total, num) {
            return total + num.quantity
        }, 0);
    }

    next();
});
Schema.plugin(paginate);
const Order = mongoose.model('Order', Schema);
export default Order;