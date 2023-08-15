const express = require("express");
const { getComments, addComment, deleteComment } = require("../controllers/comment");

const router = express.Router();

router.post("/", addComment);
router.delete("/:commentId", deleteComment);
router.get("/:videoId", getComments);

module.exports = router;
