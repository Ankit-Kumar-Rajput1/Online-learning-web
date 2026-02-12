const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect("mongodb://127.0.0.1:27017/onlineLearning")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("users", UserSchema);

// Signup API with Duplicate Email Check
app.post("/signup", async (req, res) => {
  try {
    const { email } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.send({ message: "User already exists with this email" });
    }

    const user = new User(req.body);
    await user.save();
    res.send({ message: "Signup Successful!" });

  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
});

// Login API
app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.send({ message: "User not found" });
  if (user.password !== password) return res.send({ message: "Wrong password" });

  res.send({ message: "Login Successful", user });
});

app.listen(5000, () => console.log("Server running on port 5000"));
