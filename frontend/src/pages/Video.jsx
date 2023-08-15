import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../utils/axiosConfig";

const Video = () => {
  const dispatch = useDispatch();
  const videoId = useLocation().pathname.split("/")[2];
  const { currentVideo } = useSelector((state) => state.video);
  const [channel, setChannel] = useState({});
  const { videos } = useSelector((state) => state.videos);

  useEffect(() => {
    const addView = async () => {
      try {
        await axiosInstance.put(`/videos/view/${videoId}`);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchVideo = async () => {
      dispatch(fetch.VideoStart());
      try {
        let videoIndex = videos.findIndex((video) => video._id === videoId);
        if (videoIndex !== -1) {
          let video = videos[videoIndex];
          dispatch(fetch.VideoSuccess(video));
          addView();
        } else {
          dispatch(fetch.VideoSuccess(null));
        }
      } catch (error) {
        dispatch(fetch.VideoError());
        console.log(error);
      }
    };

    fetchVideo();
  }, [dispatch, videoId, videos]);

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axiosInstance.get(`/users/${currentVideo?.userId}`);
        setChannel((prev) => res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    if (currentVideo) {
      fetchChannel();
    }
  }, [currentVideo]);

  return (
    <div className="flex gap-4">
      <div className="flex">
        <div>
          <iframe width="600" height="315" src={currentVideo?.videoUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
        <h1 className="text-lg font-normal mt-5 mb-2">{currentVideo && currentVideo.title}</h1>
        <hr className="mt-4" />
        <div className="flex justify-between">
          <div className="flex gap-5">
            <img className="flex-1 w-12 h-12 rounded-xl bg-slate-600" src={channel?.img} />
            <div className="flex-11 flex flex-col">
              <span className="font-medium">{channel?.name}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
