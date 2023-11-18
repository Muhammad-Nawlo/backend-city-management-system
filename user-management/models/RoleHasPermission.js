const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    roleId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Role'
    },
    permissionId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Permission'
    }
}, {timestamps: true})


const RoleHasPermission =mongoose.model('RoleHasPermission', Schema);
module.exports = RoleHasPermission;