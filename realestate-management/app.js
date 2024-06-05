import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";


import agentRouter from './routes/agent.js';
import paymentRouter from './routes/payment.js';
import rentalRouter from './routes/rental.js';
import saleRouter from './routes/sale.js';
import propertyRouter from './routes/property.js';
import propertyTypeRouter from './routes/propertyType.js';
import maintenanceRequestRouter from './routes/maintenanceRequest.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/agents', agentRouter);
app.use('/payments', paymentRouter);
app.use('/rentals', rentalRouter);
app.use('/sales', saleRouter);
app.use('/property-types', propertyTypeRouter);
app.use('/properties', propertyRouter);
app.use('/maintenance-request', maintenanceRequestRouter);

app.use(errorHandlerMiddleware);

export default app;
