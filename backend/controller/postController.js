const Post = require("../model/post");

exports.createPost = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    const post = await new Post({
      title,
      description,
      category,
    });
    const newPost = await post.save();

    if (newPost) {
      res.status(201).json({ Message: "Post crated successfully", newPost });
    } else {
      res.status(406).json({ Message: "Post not created" });
    }
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

exports.deletePost = async (req, res) => {
  try {
    const postDelete = await Post.findByIdAndDelete();

    if (postDelete) {
      res.status(202).json({ message: "Post delete by find id,,Successfully" });
    } else {
      res.status(500).json({ message: "Post not delete by find id,Faild" });
    }
  } catch (err) {
    res.status(202).json({ message: "Post not delete", err });
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
