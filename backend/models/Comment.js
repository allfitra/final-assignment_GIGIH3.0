const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.set("debug", true);

const commentSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    videoId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Video",
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Comment", commentSchema);
