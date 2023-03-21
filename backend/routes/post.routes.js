const express = require("express");
const router = express.Router();
const { setPosts } = require("../constrollers/post.controllers");

// CRUD routes.
router.get("/", (req, res) => {
  res.json({ message: "Here is your data." });
});

// exemple de lien entre controllers et routes
router.post("/", setPosts);

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Post deleted from id : " + req.params.id });
});

//How to handle likes.

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liked by id : " + req.params.id });
});
//How to dislike.

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post disliked by id : " + req.params.id });
});

module.exports = router;
