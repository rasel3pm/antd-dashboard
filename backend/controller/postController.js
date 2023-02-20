const Post = require("../model/post");

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

exports.deletePost = async (req, res) => {
  try {
    await Post.findByIdAndDelete({ _id: req.params.id }, (err, data) => {
      if (!err) {
        res.status(200).json({ message: "Post Delete success", data });
      } else {
        res.status(501).json({ Message: "Not Delete ", err });
      }
    });
  } catch (err) {
    res.status(501).json({ Message: "Not Delete ", err });
  }
};

// exports.deletePost = async (req, res) => {
//   try {
//     const { id: _id } = req.params;
//     const deletePost = await Post.findByIdAndDelete(_id);
//     res.status(200).json(deletePost);
//   } catch (error) {
//     res.status(409).json({
//       message: error.message,
//     });
//   }
// };

exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post Has been delete!");
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (error) {
    res.status(500).json(error);
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
