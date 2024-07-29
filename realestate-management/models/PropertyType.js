import mongoose from 'mongoose';
import paginate from 'mongoose-paginate-v2';
const Schema = new mongoose.Schema({
    name: {
        type: String, required: true, allowNull: false
    },
    description: {
        type: String, required: true, allowNull: false
    }
});
Schema.plugin(paginate);
const PropertyType = mongoose.model('PropertyType', Schema);
export default PropertyType;