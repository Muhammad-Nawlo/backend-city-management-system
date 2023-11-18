const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    permissionId: {
        ref: 'Permission',
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

const ModelHasPermission =mongoose.model('ModelHasPermission', Schema);
module.exports = ModelHasPermission;