const router = require("express").Router();
const productRouter = require("./product");
const userRegisterRouter = require("./register");
const postRouter = require("./post");

router.use("/", productRouter);
router.use("/", userRegisterRouter);
router.use("/", postRouter);
module.exports = router;
