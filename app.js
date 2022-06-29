const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./router/userRouter");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db!");
});

app.listen(5000, () => {
  console.log("System is working..");
});
