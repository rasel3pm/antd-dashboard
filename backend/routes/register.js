const router = require("express").Router();
const {
  createUser,
  allUsers,
  loginController,
  deleteUser,
} = require("../controller/userControllar");

router.post("/create-user", createUser);
router.get("/all-users", allUsers);
router.post("/login", loginController);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
