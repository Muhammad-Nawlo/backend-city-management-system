import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String, required: true, allowNull: false
    },
    description: {
        type: String, required: true, allowNull: false
    }
});

const PropertySpecialType = mongoose.model('PropertySpecialType', Schema);
export default PropertySpecialType;