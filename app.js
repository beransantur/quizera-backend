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

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log("Db connection is done"))
    .catch((err) => console.log("There is an error connection to db: " + err))

//important for deployment
const port = process.env.PORT || 5000;
app.listen(port, (err) => {
  if(err) {
    console.log("There is an error while trying to execute the system" + err)
  }
  console.log("System is up on port " + port);
});
