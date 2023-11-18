import UserRepository from "../repositories/userRepository.js";
import ResponseHelper from "../helpers/responseHelper.js";

const userRepository = new UserRepository();
const verified = async (req, res, next) => {
    const userId = req.user;
    console.log(userId)
    try {
        const user = await userRepository.getById(userId)
        if (!user) {
            return ResponseHelper.notFound(res)
        }
        if (!user.verifiedAt) {
            return ResponseHelper.forbidden(res, 'User is not verified')
        }
        next();
    } catch (error) {
        return ResponseHelper.internalServerError(res)
    }
}
export default verified;