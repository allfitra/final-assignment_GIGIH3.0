import React, { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import { axiosInstance } from "../utils/axiosConfig";

const Comment = ({ comment }) => {
  const [channel, setChannel] = useState({});

  useEffect(() => {
    const fetchChannel = async () => {
      try {
        const res = await axiosInstance.get(`/users/${comment?.userId}`);
        setChannel((prev) => res.data.user);
      } catch (error) {
        console.log(error);
      }
    };

    fetchChannel();
  }, [comment?.userId]);

  return (
    <>
      <div className="flex-10 flex flex-col gap-2.5">
        <div className="flex-10 flex flex-col gap-2.5">
          <span className="text-xs font-medium">
            {channel?.name}{" "}
            <span className="font-xs font-normal ml-1">
              {formatDistanceToNow(new Date(comment?.createdAt), {
                addSuffix: true,
              })}
            </span>
          </span>
          <span className="font-sm">{comment?.description}</span>
        </div>
      </div>
    </>
  );
};

export default Comment;
