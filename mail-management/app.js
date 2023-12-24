import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

import emailRouter from './routes/email.js';
import config from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', emailRouter);

app.use(errorHandlerMiddleware);

export default app;