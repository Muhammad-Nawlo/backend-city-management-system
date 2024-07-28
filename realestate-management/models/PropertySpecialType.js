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
const PropertySpecialType = mongoose.model('PropertySpecialType', Schema);
export default PropertySpecialType;