const {
  saveApiQuestions,
  getQuestionsFromDb,
} = require("../controllerS/questionController");
const express = require("express");

const router = express.Router();

router.get("/getQuestionsFromDb", getQuestionsFromDb);

//this is for saving the questions from api to DB
router.post("/saveQuestionsToDb", saveApiQuestions);

module.exports = router;
