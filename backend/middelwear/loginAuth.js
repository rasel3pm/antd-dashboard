const jwt = require("jsonwebtoken");
const User = require("../model/userRegister");
const isAuthentication = async (req, res, next) => {
  try {
    const token = await req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(403).json({ Message: "Unauthorized" });
    }

    const decodad = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decodad) {
      res.status(403).json({ Message: "Unauthorized" });
    }
    const user = await User.findById(decodad._id);

    if (!user) {
      res.status(403).json({ Message: "Unauthorized" });
    }
    req.user = user;
    next();
  } catch (error) {}
};

module.exports = isAuthentication;
