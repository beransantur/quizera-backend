const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  category: String,
  type: String,
  difficulty: String,
  question: String,
  correct_answer: String,
  answers: [String],
});

const Question = mongoose.model("Question", schema, "questions");

module.exports = Question;
