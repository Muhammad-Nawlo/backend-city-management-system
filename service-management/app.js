import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

import serviceRouter from './routes/service.js';
import Uploads from "./middlewares/multerConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//multer middleware
app.use(Uploads.array('files'));

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use('/', serviceRouter);
app.use(express.static(path.join(__dirname, 'public')));



app.use(errorHandlerMiddleware);

export default app;
