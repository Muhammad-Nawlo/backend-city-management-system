const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    roleId: {
        ref: 'Role',
        type: mongoose.Schema.ObjectId,
        required: true,
    },
    modelType: {
        type: String,
        required: true
    },
    modelId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
}, {timestamps: true});

const ModelHasRole =mongoose.model('ModelHasRole', Schema);
module.exports = ModelHasRole;