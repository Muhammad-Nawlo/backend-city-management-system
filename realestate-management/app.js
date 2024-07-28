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
import propertySpecialTypeRouter from './routes/propertySpecialType.js';
import maintenanceRequestRouter from './routes/maintenanceRequest.js';
import Uploads from "./middlewares/multerConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//multer middleware
app.use(Uploads.array('files[]'));


app.use(logger('dev'));
app.use(
    cors({
      origin: true,
      credentials: true,
    })
  );
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/agents', agentRouter);
app.use('/payments', paymentRouter);
app.use('/rentals', rentalRouter);
app.use('/sales', saleRouter);
app.use('/property-types', propertyTypeRouter);
app.use('/property-special-types', propertySpecialTypeRouter);
app.use('/properties', propertyRouter);
app.use('/maintenance-requests', maintenanceRequestRouter);

app.use(errorHandlerMiddleware);

export default app;
