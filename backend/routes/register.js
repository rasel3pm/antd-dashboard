const router = require("express").Router();
const {
  createUser,
  allUsers,
  loginController,
} = require("../controller/userControllar");

router.post("/create-user", createUser);
router.get("/all-users", allUsers);
router.post("/login", loginController);

module.exports = router;
