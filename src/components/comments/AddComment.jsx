import React, { useState } from "react";
import { toast } from "react-toastify";

function AddComment() {
  const [commentText, setCommentText] = useState("");
  const submitCommentFormHandler = (e) => {
    e.preventDefault();
    if (commentText.trim() === "") return toast.error("Comment is required");
    console.log(commentText);
  };
  return (
    <>
      <form onSubmit={submitCommentFormHandler} className="d-flex">
        <input
          type="text"
          placeholder="Add new comment..."
          className="form-control w-75 mx-2"
          onChange={(e) => setCommentText(e.target.value)}
        />
        <button className="btn btn-outline-secondary rounded-5">
          Add comment
        </button>
      </form>
    </>
  );
}

export default AddComment;
