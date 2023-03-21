const mongoose = require("mongoose");

// this is how de back-end  will look like
const postSchema = mongoose.Schema(
  {
    message: {
      type: String,
      required: true,
    },
    author: {
      trype: String,
      required: true,
    },
    likers: {
      type: [String],
    },
  },
  {
    timestamp: true,
  }
);

module.expo, (rts = mongoose.model("post", postSchema));
