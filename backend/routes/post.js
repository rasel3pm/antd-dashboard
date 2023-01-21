const {
  createPost,
  getAllPost,
  deletePost,
} = require("../controller/postController");

const router = require("express").Router();

router.post("/create-post", createPost);
router.get("/posts", getAllPost);
router.delete("/post:id", deletePost);

module.exports = router;
