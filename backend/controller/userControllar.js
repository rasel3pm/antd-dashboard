const Register = require("../model/userRegister");
const bcrypt = require("bcrypt");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await Register.findOne({ email: email });

    if (user) {
      throw error("Already have an account", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    req.body.password = hash;

    const newUser = await new Register(req.body);
    const data = await newUser.save();

    res.status(200).json({ message: "User Created Successfully", user: data });
  } catch (error) {
    console.log(error);
  }
};

exports.allUsers = async (req, res) => {
  try {
    const users = await Register.find();
    res.status(200).json({ message: "all User", users });
  } catch (error) {}
};

//login controller

exports.loginController = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(404).json({ message: "Invalid Required Data" });
    }
  } catch (err) {
    console.log(err);
  }
};
