const { createPost, getAllPost } = require("../controller/postController");

const router = require("express").Router();

router.post("/create-post", createPost);
router.get("/posts", getAllPost);

module.exports = router;
