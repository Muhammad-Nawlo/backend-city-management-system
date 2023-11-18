import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import authRouter from './routes/auth.js';
import userRouter from './routes/user.js';
import moduleRouter from './routes/module.js';
import roleRouter from './routes/role.js';
import permissionRouter from './routes/permission.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//The 404 Route (ALWAYS Keep this as the last route)

app.use('/', authRouter);
app.use('/users', userRouter);
app.use('/roles', roleRouter);
app.use('/permissions', permissionRouter);
app.use('/modules', moduleRouter);
app.use('*', function(req, res){
    return res.json({'page-not-found':"404"})
});
export default app;
