import React, { useState } from "react";
import Swal from "sweetalert2";
import UpdateComment from "./UpdateComment";

function CommentsList() {
  const [updateComment, setUpdateComment] = useState(false);

  const deleteCommentHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };
  return (
    <>
      <ol className="list-group list-group rounded-4 my-3">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          <div className="text-start p-1">
            <div className="fw-bold">UserName</div>
            Comment text text text
          </div>
          <div>
            <span className="badge bg-dark bg-opacity-50 rounded-pill mb-1">
              2 hours ago
            </span>
            <br />
            <span>
              <i
                onClick={deleteCommentHandler}
                className="bi bi-trash-fill mx-2"
              ></i>
              <i
                onClick={() => setUpdateComment(true)}
                className="bi bi-pencil-square"
              ></i>
            </span>
          </div>
        </li>
      </ol>
      {updateComment && <UpdateComment setUpdateComment={setUpdateComment} />}
    </>
  );
}

export default CommentsList;
