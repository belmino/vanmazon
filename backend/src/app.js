/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
// import bodyParser from "body-parser";

import config from "./config";
import data from "./data";
import userRouter from "./routers/userRouter";

mongoose
  .connect(config.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((error) => {
    console.log(error.reason);
  });
const app = express();

// Settings
app.set("port", 5000);

app.use(cors());
app.use(express.json());
// app.use(bodyParser.json());

app.use("/api/users", userRouter);
app.use("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  }
  res.status(404).send({ message: "Product Not Found!" });
});

app.use("/api/products", (req, res) => {
  res.send(data.products);
});

app.use((err, req, res, next) => {
  const status = err.name && err.name === "ValidationError" ? 400 : 500;
  res.status(status).send({ message: err.message });
});

export default app;
