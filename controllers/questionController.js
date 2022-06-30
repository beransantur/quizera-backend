const axios = require("axios").default;
const Question = require("../models/questionModel");

//this is for saving the questions from api to DB
const saveApiQuestions = async (req, res) => {
  const response = await axios.get(
    "https://opentdb.com/api.php?amount=50&category=18&difficulty=medium&type=multiple"
  );

  const formatedQuestions = response.data.results.map((question) => {
    return {
      ...question,
      answers: shuffleArray([
        question.correct_answer,
        ...question.incorrect_answers,
      ]),
    };
  });
  await Question.create(formatedQuestions);
  res.json(formatedQuestions);
};

const getQuestionsFromDb = async (req, res) => {
  const foundQuestions = await Question.find();
  const shuffledQuestions = shuffleArray(foundQuestions);

  const newQuestions = [];

  for (let i = 0; i < 10; i++) {
    newQuestions.push(shuffledQuestions[i]);
  }

  res.json(newQuestions);
};

function shuffleArray(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

module.exports = {
  saveApiQuestions,
  getQuestionsFromDb,
};
