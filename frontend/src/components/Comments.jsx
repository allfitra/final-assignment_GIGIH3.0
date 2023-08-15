import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import { axiosInstance } from "../utils/axiosConfig";

const Comments = ({ videoId }) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");
  const [toggleCommentButtons, settoggleCommentButtons] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await axiosInstance.get(`/comments/${videoId}`);
        console.log(res.data);
        setComments((prev) => res.data.comments);
      } catch (error) {
        console.log(error);
      }
    };

    fetchComments();
  }, [videoId]);

  const handleCommentSubmission = async (e) => {
    console.log(newCommentText);
    try {
      const res = await axiosInstance.post(`/comments`, {
        videoId,
        description: newCommentText,
      });
      setComments((prev) => [...prev, res.data.comment]);
      setNewCommentText("");
      settoggleCommentButtons((prev) => false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCancel = (e) => {
    setNewCommentText("");
    settoggleCommentButtons((prev) => false);
  };

  return (
    <div className="flex flex-col gap-7">
      <div className="flex items-center gap-5">
        <input
          className="w-full p-1 border-none border-b-2 bg-transparent"
          placeholder="Add a comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          onFocus={(e) => settoggleCommentButtons((prev) => true)}
        />
      </div>
      <div className="flex justify-end gap-1" style={{ display: !toggleCommentButtons && "none" }}>
        <button className="py-1 px-4 bg-transparent border-2 text-sky-500 cursor-pointer rounded font-medium" onClick={handleCancel}>
          Cancel
        </button>
        <button className="py-1 px-4 bg-transparent border-2 text-sky-500 cursor-pointer rounded font-medium" onClick={handleCommentSubmission}>
          Comment
        </button>
      </div>
      {comments.length > 0 ? comments.map((comment) => <Comment key={comment._id} comment={comment} />) : <EmptyCommentsText>No Comments for this video</EmptyCommentsText>}
    </div>
  );
};

export default Comments;
