import mongoose from "mongoose";

const Schema = new mongoose.Schema({
    sender: {
        type: String, allowNull: false, required: true
    },
    recipient: {
        type: String, allowNull: false, required: true
    },
    subject: String,
    body: String
}, {
    timestamps: true
});

const Email = mongoose.model('Email', Schema);

export default Email;