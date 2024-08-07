import dotenv from 'dotenv';

dotenv.config();

const config = {
    mongoConnection: process.env.MONGODB_CONNECTION,
    port: process.env.PORT,
    jwtSecret: process.env.SHARED_SECRET_KEY_JWT,
    bcryptSalt: process.env.BCRYPT_SALT,
    env: process.env.ENV || 'development',
    tokenExpiredTime: process.env.TOKEN_EXPIRED_TIME_HOUR,
    fileUrl: process.env.FILE_URL,
    userServiceEvent: process.env.USER_SERVICE_URL_EVENT,
};
export default config;