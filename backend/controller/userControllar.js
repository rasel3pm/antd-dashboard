const User = require("../model/userRegister");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      throw error("Already have an account", 400);
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    req.body.password = hash;

    const newUser = await new User(req.body);
    const data = await newUser.save();

    res.status(200).json({ message: "User Created Successfully", user: data });
  } catch (error) {
    console.log(error);
  }
};

exports.allUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ message: "all User", users });
  } catch (error) {}
};

//login controller

exports.loginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email: email });
    if (user && user.length > 0) {
      const validPassword = await bcrypt.compare(password, user[0].password);

      if (validPassword) {
        const token = jwt.sign(
          {
            email: user[0].email,
            userId: user[0]._id,
          },
          process.env.JWT_SECRET,
          { expiresIn: "1h" }
        );
        res.status(201).json({ access_token: token, message: "login success" });
      } else {
        res.status(401).json({ message: "wrong email or password" });
      }
    } else {
      res.status(401).json({ message: "wrong email or password" });
    }
  } catch (err) {
    res.status(401).json({ message: "wrong email or password" });
  }
};

//delete product by id

exports.deleteItem = async (req, res) => {
  try {
    await User.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
      if (!err) {
        res.status(200).json({ message: "Delete todo success", data });
      } else {
        res.status(501).json({ Message: "Not Delete ", err });
      }
    });
  } catch (err) {
    console.log(err);
  }
};
