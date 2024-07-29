import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";


import rentalRouter from './routes/rentalCar.js';
import carRouter from './routes/car.js';
import carTypeRouter from './routes/carType.js';

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
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use('/rentals', rentalRouter);
app.use('/car-types', carTypeRouter);
app.use('/', carRouter);

app.use(express.static(path.join(__dirname, 'public')));

app.use(errorHandlerMiddleware);
export default app;
