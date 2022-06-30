const {
  createLeaderBoardMember,
  getLeaderBoardMembers,
} = require("../controllerS/leaderBoardController");

const express = require("express");
const router = express.Router();

router.post("/createLeaderBoardMember", createLeaderBoardMember);
router.get("/", getLeaderBoardMembers);

module.exports = router;
