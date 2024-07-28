import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import errorHandlerMiddleware from "./middlewares/errorHandlerMiddleware.js";

import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";
import roleRouter from "./routes/role.js";
import permissionRouter from "./routes/permission.js";
import Uploads from "./middlewares/multerConfig.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

//multer middleware
app.use(Uploads.array("files[]"));

app.use(logger("dev"));
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/users", userRouter);
app.use("/roles", roleRouter);
app.use("/permissions", permissionRouter);
app.use("/", authRouter);

app.use(errorHandlerMiddleware);

export default app;
