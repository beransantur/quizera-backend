const { saveApiQuestions } = require("../controllerS/questionController");
const express = require("express");

const router = express.Router();

//this is for saving the questions from api to DB
router.post("/saveQuestionsToDb", saveApiQuestions);

module.exports = router;
