import dotenv from 'dotenv';

dotenv.config();

const config = {
    mongoConnection: process.env.MONGODB_CONNECTION,
    port: process.env.PORT,
    url: process.env.URL,
    jwtSecret: process.env.SHARED_SECRET_KEY_JWT,
    bcryptSalt: process.env.BCRYPT_SALT,
    env: process.env.ENV || 'development',
    frontendUrl: process.env.FRONTEND_URL,
    appName: process.env.APP_NAME,
    mailService: {
        mailer: process.env.MAIL_MAILER,
        host: process.env.MAIL_host,
        port: process.env.MAIL_PORT,
        username: process.env.MAIL_USERNAME,
        password: process.env.MAIL_PASSWORD,
        encryption: process.env.MAIL_ENCRYPTION,
        email: process.env.MAIL_FROM_ADDRESS,
    }

};
export default config;