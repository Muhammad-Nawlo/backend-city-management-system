import User from "../models/User.js";

async function hasPermission(permission) {
    return async (req, res, next) => {
        const userId = req.userId;
        const user = await User.findById(userId).populate('role');
        if (!user) {
            return false;
        }
        return user.role.permissions.includes(permission);
    }
}