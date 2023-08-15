const User = require("../models/User");
const Video = require("../models/Video");

const addVideo = async (req, res, next) => {
  const { title, description, imgUrl, videoUrl } = req.body;

  if (!title || !description || !imgUrl || !videoUrl) {
    res.status(400);
    return next(new Error("fill in the data completely"));
  }

  try {
    const video = await Video.create({
      userId: req.user._id,
      title,
      description,
      imgUrl,
      videoUrl,
      ...req.body,
    });

    res.status(201).json({
      success: true,
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
    return next(error);
  }
};

const deleteVideo = async (req, res, next) => {
  const { videoId } = req.params;
  try {
    const video = await Video.findById(videoId);

    if (!video) {
      res.status(400);
      return next(new Error("Video does not exists"));
    }

    if (req.user._id === video.userId) {
      await Video.findByIdAndDelete(videoId);

      res.status(200).json({
        success: true,
        message: "Video deletion successfull",
      });
    } else {
      res.status(401);
      return next(new Error(" "));
    }
  } catch (error) {
    console.log(error);
    res.status(400);
    return next(error);
  }
};

const getVideo = async (req, res, next) => {
  const { videoId } = req.params;
  try {
    const video = await Video.findById(videoId);

    if (!video) {
      res.status(400);
      return next(new Error("Video does not exists"));
    }

    res.status(200).json({
      success: true,
      video,
    });
  } catch (error) {
    console.log(error);
    res.status(400);
    return next(error);
  }
};

module.exports = {
  addVideo,
  deleteVideo,
  getVideo,
};
