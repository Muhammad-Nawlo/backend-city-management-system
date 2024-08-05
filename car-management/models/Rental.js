import mongoose from "mongoose";
import Car from "./Car.js";

import paginate from 'mongoose-paginate-v2';
import eventHandler from "../helpers/eventHandler.js";

const Schema = new mongoose.Schema({
    carId: {
        type: mongoose.Schema.ObjectId, ref: "Car", required: true, allowNull: false
    },
    userId: {
        type: mongoose.Schema.ObjectId, ref: "User", required: true, allowNull: false
    },
    startDate: {
        type: Date, required: true, allowNull: false
    },
    endDate: {
        type: Date, required: true, allowNull: false
    },
    totalPrice: {
        type: Number, allowNull: false
    },
    location: {
        type: String, required: true, allowNull: false
    },
    user: {
        type: Object
    },
    status: {
        type: String,
        enum: ['Pending', 'Rent', 'Canceled', 'New', 'Done'],
        default: 'Pending'
    },
}, {
    timestamps: true
});

Schema.pre('save', async function (next) {
    const car = await Car.findById(this.carId);
    const numberOfDays = Math.round((this.endDate - this.startDate) / (1000 * 60 * 60 * 24))
    this.totalPrice = car.price * (numberOfDays - 1);

    const user = await eventHandler({id: this.userId});
    this.user = user.result;

    next();
});

Schema.set('toJSON', {virtuals: true});
Schema.set('toObject', {virtuals: true});

Schema.plugin(paginate);

const RentalCar = mongoose.model('RentalCar', Schema);
export default RentalCar;