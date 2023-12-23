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
    },
    permissions: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Permission'
        }
    ]
}, {timestamps: true});


const Role = mongoose.model('Role', Schema);
export default Role;