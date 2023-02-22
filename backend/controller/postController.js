const Post = require("../model/post");
// const multer = require("multer");

// const UPLODA_PATH = "./uploads";
// const upload = multer({
//   dest: UPLODA_PATH,
//   limits: {
//     fileSize: 1000000, //1mb
//   },
//   fileFilter: (req, file, cb) => {
//     if (file.mimetype === "image/png" || file.mimetype === "image/jpg") {
//       cb(null, true);
//     } else {
//       cb(null, false);
//     }
//   },
// });

exports.createPost = async (req, res) => {
  const { title, description, category, author } = req.body;
  try {
    const post = await new Post({
      title,
      description,
      category,
      author,
    });
    const newPost = await post.save();
    res.status(201).json({ Message: "Post crated successfully", newPost });
  } catch (error) {
    console.log(error);
  }
};

//get all posts

exports.getAllPost = async (req, res) => {
  try {
    const post = await Post.find();

    if (!post) {
      res.status(404).json({ message: "Post not found" });
    } else {
      res.status(200).json({ message: "Post found successfully", post });
    }
  } catch (err) {
    console.log(err);
  }
};

// DELETE /post/:id - delete a post by ID
exports.deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    await Post.deleteOne({ _id: postId });

    res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
};

//post update by id and save
exports.updatePost = async (req, res) => {
  const { title, description, category } = req.body;

  try {
    const updatePost = await Post.findById({
      title,
      description,
      category,
    });
    const updated = await updatePost.save();
    if (updated) {
      res.status(202).json({ message: "Post updated ,Successfully", updated });
    } else {
      res.status(204).json({ message: "Post not update,Faild" });
    }
  } catch (err) {
    console.log(err);
  }
};
