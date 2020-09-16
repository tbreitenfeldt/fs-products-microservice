"use strict";

import fs from "fs";
import path from "path";

import express from "express";
import morgan from "morgan";
import cors from "cors";
import xss from "xss-clean";
import config from "config";

const app = express();
const port = config.get("server.port");
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "..", "logs", "requests.log"),
  {
    flags: "a",
  }
);
const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(xss());
app.use(morgan("combined", { stream: accessLogStream }));

app.use((error, request, response, next) => {
  response
    .status(error.status)
    .send({ status: error.status, message: error.message });
});

app.listen(port, () => console.log(`Listening on poart ${port}`));
