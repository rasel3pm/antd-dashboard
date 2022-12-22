const router = require("express").Router();
const productRouter = require("./product");
const userRegisterRouter = require("./register");

router.use("/", productRouter);
router.use("/", userRegisterRouter);
module.exports = router;
