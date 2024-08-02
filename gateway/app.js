import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import proxy from "express-http-proxy";

import config from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// check if the request is multipart
const isMultipartRequest = function (req) {
  const contentTypeHeader = req.headers["content-type"];
  return contentTypeHeader && contentTypeHeader.indexOf("multipart") > -1;
};

const proxyHandler = function (host) {
  return function (req, res, next) {
    let reqBodyEncoding;
    let reqAsBuffer = false;
    let parseReqBody = true;

    if (isMultipartRequest(req)) {
      reqAsBuffer = true;
      reqBodyEncoding = null;
      parseReqBody = false;
    }
    return proxy(host, {
      reqAsBuffer,
      reqBodyEncoding,
      parseReqBody,
    })(req, res, next);
  };
};

const prefix = "/api";
app.use(`${prefix}/emails`, proxyHandler(config.emailManagementServiceUrl));
app.use(`${prefix}/services`, proxyHandler(config.serviceManagementServiceUrl));
app.use(
  `${prefix}/real-estates`,
  proxyHandler(config.realestateManagementServiceUrl)
);
app.use(
  `${prefix}/restaurants`,
  proxyHandler(config.restaurantManagementServiceUrl)
);
app.use(`${prefix}/cars`, proxyHandler(config.carManagementServiceUrl));
app.use(`${prefix}/ads`, proxyHandler(config.adManagementServiceUrl));
app.use(`${prefix}`, proxyHandler(config.userManagementServiceUrl)); //default route

export default app;
