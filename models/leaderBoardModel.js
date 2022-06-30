const mongoose = require("mongoose");

const schema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    score: {
      type: Number,
      required: true,
    },
  },
  { timeStamps: true }
);
module.exports = mongoose.model("LeaderBoardMember", schema, "leader-board");
