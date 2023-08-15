import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { axiosInstance } from "../utils/axiosConfig";

const Card = ({ type, video }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axiosInstance.get(`/users/${video.userId}`);
        setChannel((prev) => res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChannel();
  }, [video.userId]);

  return (
    <Link to={`/video/${video._id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div className="max-w-sm rounded overflow-hidden shadow-lg m-10 w-80 bg-transparent ">
        <img className="w-full h-44 bg-slate-600 flex-1" src={video.imgUrl} type={type} />
        <div className="px-6 py-4" type={type}>
          <div className="font-bold text-white text-xm mb-2">{channel.name}</div>
          <p className="text-white text-xs">{video.title}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
