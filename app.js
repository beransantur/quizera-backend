const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRouter = require("./routers/userRouter");
const questionRouter = require("./routers/questionRouter");
const leaderBoardRouter = require("./routers/leaderBoardRouter");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/questions", questionRouter);
app.use("/leaderBoard", leaderBoardRouter);

mongoose.connect(process.env.DB_CONNECTION, () => {
  console.log("connected to db!");
});

//important for heroku
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("System is working..");
});
