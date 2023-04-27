import React, { useState } from "react";
import { toast } from "react-toastify";

function UpdateComment({ setUpdateComment }) {
  const [comment, setComment] = useState("");
  const submitUpdateCommentHandler = (e) => {
    e.preventDefault();
    if (comment.trim() === "") return toast.error("Comment must be not empty");
    console.log({ comment });
  };
  return (
    <>
      <div className="update_post_modal">
        <form
          className="update_post_form"
          onSubmit={submitUpdateCommentHandler}
        >
          <abbr title="close">
            <i
              onClick={() => setUpdateComment(false)}
              className="bi bi-x-circle-fill colse_btn"
            ></i>
          </abbr>
          <h2>Update Comment</h2>

          <div className="my-3">
            <textarea
              rows="4"
              className="form-control"
              id="description"
              placeholder="type Comment here.."
              onChange={(e) => {
                setComment(e.target.value);
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default UpdateComment;
