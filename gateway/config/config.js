import dotenv from 'dotenv';

dotenv.config();

const config = {
    port: process.env.PORT,
    env: process.env.ENV || 'development',
    userManagementServiceUrl: process.env.USER_MANAGEMENT_SERVICE_URI,
    serviceManagementServiceUrl: process.env.SERVICE_MANAGEMENT_SERVICE_URI,
    emailManagementServiceUrl: process.env.EMAIL_MANAGEMENT_SERVICE_URI,
    realestateManagementServiceUrl: process.env.REALESTATE_MANAGEMENT_SERVICE_URI,
    restaurantManagementServiceUrl: process.env.RESTAURANT_MANAGEMENT_SERVICE_URI,
    carManagementServiceUrl: process.env.CAR_MANAGEMENT_SERVICE_URI,
    adManagementServiceUrl: process.env.AD_MANAGEMENT_SERVICE_URI,
};
export default config;