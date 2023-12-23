import dotenv from 'dotenv';

dotenv.config();

const config = {
    mongoConnection: process.env.MONGODB_CONNECTION,
    port: process.env.PORT,
    jwtSecret: process.env.SHARED_SECRET_KEY_JWT,
    bcryptSalt: process.env.BCRYPT_SALT,
    env: process.env.ENV || 'development'
};
export default config;