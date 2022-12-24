const jwt = require("jsonwebtoken");
const logInAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      res.status(403).json({ Message: "Unauthorized" });
    }

    const decodad = await jwt.verify(token, process.env.JWT_SECRET);

    if (!decodad) {
      res.status(403).json({ Message: "Unauthorized" });
    }
  } catch (error) {}
};

module.exports = logInAuth;
