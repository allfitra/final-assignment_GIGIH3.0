import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "./videoSlice";
import videosReducer from "./videosSlice";

export default configureStore({
  reducer: {
    video: videoReducer,
    video: videosReducer,
  },
});
