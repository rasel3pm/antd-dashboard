const router = require("express").Router();
const {
  createUser,
  allUsers,
  loginController,
  deleteItem,
} = require("../controller/userControllar");

router.post("/create-user", createUser);
router.get("/all-users", allUsers);
router.post("/login", loginController);
router.delete("/deleteuser:id", deleteItem);

module.exports = router;
