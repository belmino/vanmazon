/* eslint-disable no-underscore-dangle */
/* eslint-disable no-console */
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

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

export default app;
