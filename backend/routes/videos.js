const express = require("express");
const { addVideo, deleteVideo, getVideo } = require("../controllers/video");

const router = express.Router();

router.post("/", addVideo);
router.delete("/:videoId", deleteVideo);
router.get("/:videoId", getVideo);

module.exports = router;
