import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    env: process.env.ENV || 'development',
    userManagementServiceUrl: process.env.USER_MANAGEMENT_SERVICE_URI,
    emailManagementServiceUrl: process.env.EMAIL_MANAGEMENT_SERVICE_URI
};
export default config;