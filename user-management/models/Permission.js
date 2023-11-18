import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    name: {
        type: String,
        allowNull: false,
        required: true,
        unique: true
    },
    slug: {
        type: String,
        allowNull: false,
        required: true,
        unique: true
    }
}, {timestamps: true});


const Permission = mongoose.model('Permission', Schema);
export default Permission;
