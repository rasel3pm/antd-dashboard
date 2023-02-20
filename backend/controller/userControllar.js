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

// DELETE /products/:id - delete a product by ID
exports.deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    await User.deleteOne({ _id: userId });

    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};
