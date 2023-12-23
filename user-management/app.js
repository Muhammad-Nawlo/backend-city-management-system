import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import moduleRouter from './routes/module.js';
import roleRouter from './routes/role.js';
import permissionRouter from './routes/permission.js';
import config from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', authRouter);
app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/permissions', permissionRouter);
app.use('/modules', moduleRouter);

app.use(errorHandlerMiddleware);

export default app;
