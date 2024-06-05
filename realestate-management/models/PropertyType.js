import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: {
        type: String, required: true, allowNull: false
    },
    description: {
        type: String, required: true, allowNull: false
    }
});

const PropertyType = mongoose.model('PropertyType', Schema);
export default PropertyType;