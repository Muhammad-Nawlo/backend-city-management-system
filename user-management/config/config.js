import dotenv from  'dotenv';
dotenv.config();

const config= {
    mongoConnection: process.env.MONGODB_CONNECTION,
    port: process.env.PORT,
    jwtSecret:process.env.SHARED_SECRET_KEY_JWT,
    bcryptSalt:process.env.BCRYPT_SALT,
};
export default config;