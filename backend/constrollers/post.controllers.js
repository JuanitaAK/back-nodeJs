const PostModel = require("../models/post.model");
mudule.exports.getPosts = async (req, res) => {
  const post = await PostModel.find();
  res.status(200).json(posts);
};

module.exports.setPosts = async (req, res) => {
  if (!req.body.message) {
    res.status(400).json({ message: "Please add a message." });
  }

  const post = await PostModel.creat({
    message: req.body.message,
    author: req.body.author,
  });
  res.status(200).json(post);
};
