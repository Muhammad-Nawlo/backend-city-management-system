import jwt from 'jsonwebtoken';
import config from '../config/config.js';
import ResponseHelper from '../helpers/responseHelper.js';

async function authJWT(req, res, next) {
    try {
        // Extract authorization header and bearer token (if present)
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Unauthorized' });
        }
        const token = authHeader.split(' ')[1];

        // Verify the JWT token using a secret key
        const decoded = jwt.verify(token, config.jwtSecret);

        // Check if user ID exists in the request object (optional)
        if (!req.user) {
            req.user = decoded.user; // Add user ID to request object
        }

        next(); // Allow access to protected routes
    } catch (error) {
        if (error.name === 'JsonWebTokenError') { // Handle invalid or expired tokens
            return ResponseHelper.unauthorized(res, 'Invalid token');
        } else if (error.name === 'TokenExpiredError') { // Handle expired tokens specifically
            return ResponseHelper.unauthorized(res, 'Token expired');
        } else {
            // Handle other errors (e.g., database errors)
            console.error(error);
            return ResponseHelper.internalServerError(res, 'Internal server error');
        }
    }
}
export default authJWT