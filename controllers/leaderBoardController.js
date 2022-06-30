const User = require("../models/userModel");
const LeaderBoardMember = require("../models/leaderBoardModel");

const createLeaderBoardMember = async (req, res) => {
  const foundUser = await User.findOne({ _id: req.body._id });
  const score = req.body.score;
  const newMember = {
    _id: foundUser._id,
    name: foundUser.name,
    score: score,
  };
  const existLeaderBoardMember = await LeaderBoardMember.findOne({
    _id: newMember._id,
  });
  if (!existLeaderBoardMember) {
    const leaderBoardMember = await LeaderBoardMember.create(newMember);
    res.json({ createdLeaderMember: leaderBoardMember });
  } else {
    const updatedLeaderBoard = await LeaderBoardMember.updateOne(
      { _id: req.body._id },
      newMember
    );
    res.json({ updatedLeaderMember: updatedLeaderBoard });
  }
};

const getLeaderBoardMembers = async (req, res) => {
  const members = await LeaderBoardMember.find();

  res.send(members);
};

module.exports = { createLeaderBoardMember, getLeaderBoardMembers };
