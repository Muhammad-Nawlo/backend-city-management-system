import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

import restaurantRouter from './routes/restaurant.js';
import categoryRouter from './routes/category.js';
import itemRouter from './routes/item.js';
import orderRouter from './routes/order.js';

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

app.use('/categories', categoryRouter);
app.use('/items', itemRouter);
app.use('/orders', orderRouter);
app.use('/', restaurantRouter);

app.use(express.static(path.join(__dirname, 'public')));


app.use(errorHandlerMiddleware);

export default app;
