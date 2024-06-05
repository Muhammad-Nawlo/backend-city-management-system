import express from 'express';
import path from 'path';
import {fileURLToPath} from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import proxy from 'express-http-proxy';

import config from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/emails', proxy(config.emailManagementServiceUrl));
app.use('/services', proxy(config.serviceManagementServiceUrl));
app.use('/real-estate', proxy(config.realestateManagementServiceUrl));
app.use('/', proxy(config.userManagementServiceUrl)); //default route


export default app;
