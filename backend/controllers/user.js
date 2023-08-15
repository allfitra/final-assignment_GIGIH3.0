const User = require("../models/User");

const updateUser = async (req, res, next) => {
  const { id } = req.params;
  if (id === req.user._id) {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body,
        },
        {
          new: true,
        }
      );

      res.status(200).json({
        success: true,
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  } else {
    res.status(401);
    return next(new Error("You can update only your account!"));
  }
};

const deleteUser = async (req, res, next) => {
  const { id } = req.params;
  if (id === req.user._id) {
    try {
      await User.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        message: "User has been deleted.",
      });
    } catch (error) {
      console.log(error);
      return next(error);
    }
  } else {
    res.status(401);
    return next(new Error(" "));
  }
};

const getUser = async (req, res, next) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id).select("-password");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
};

module.exports = {
  updateUser,
  deleteUser,
  getUser,
  subscribeUser,
  unsubscribeUser,
  likeVideo,
  dislikeVideo,
};
