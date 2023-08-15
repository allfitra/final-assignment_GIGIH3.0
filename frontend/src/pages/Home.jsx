import React, { useEffect, useState } from "react";
import { axiosInstance } from "../utils/axiosConfig";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";

const Home = ({ type }) => {
  const dispatch = useDispatch();
  const { videos, setVideos } = useSelector((state) => state.videos);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axiosInstance.get(`/videos/${type}`);
        setVideos(res.data.videos);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, [type]);

  return (
    <>
      <div className="flex flex-wrap justify-between">{videos.length > 0 && videos.map((video) => <Card key={video._id} video={video} />)}</div>
    </>
  );
};

export default Home;
