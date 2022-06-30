const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (foundUser) {
      res.json({ userAlreadyExists: foundUser._id });
      return;
    }
    const newUser = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newUser.password, salt);

    newUser.password = hashedPassword;
    const createdUser = await User.create(newUser);
    res.json({ createdUser: createdUser });
  } catch (e) {
    res.json({ error: e });
  }
};

const loginUser = async (req, res) => {
  try {
    const foundUser = await User.findOne({ email: req.body.email });
    if (!foundUser) {
      res.json({ error: "user not found" });
    } else {
      const isPasswordCorrect = await bcrypt.compare(
        req.body.password,
        foundUser.password
      );
      if (!isPasswordCorrect) {
        res.json({ error: "password is not correct" });
      } else {
        const formatedLoggedInUser = {
          _id: foundUser._id,
          name: foundUser.name,
          email: foundUser.email,
        };
        //all correct
        res.json({ loggedInUser: formatedLoggedInUser });
      }
    }
  } catch (e) {
    res.json({ error: e });
  }
};

module.exports = { registerUser, loginUser };
