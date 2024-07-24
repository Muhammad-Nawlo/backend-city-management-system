import mongoose from "mongoose";
import Car from "./Car.js";


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
    }
}, {
    timestamps: true
});

Schema.pre('save', async function (next) {
    const car = await Car.findById(this.carId);
    const numberOfDays = Math.round((this.endDate - this.startDate) / (1000 * 60 * 60 * 24))
    this.totalPrice = car.price * (numberOfDays - 1);
    next();
});


const RentalCar = mongoose.model('RentalCar', Schema);
export default RentalCar;