import React from "react";
import { useParams } from "react-router-dom";
import { posts } from "../../dummyData";

function PostDetails() {
  const params = useParams();
  const post = posts.find((post) => post._id.toString() === params.postId);

  return (
    <>
      <div className="container bg-light p-5 my-5 rounded shadow text-center">
        <img src={post.image} alt="" width="100%" className="rounded-5" />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <img
              className="rounded-circle mx-1"
              src={post.user.image}
              alt=""
              width="40px"
            />
            <span>{post.user.username}</span>
          </div>
          <p className="px-3 py-2 bg-dark bg-opacity-25 fs-6 text-dark rounded-5">
            Category: {post.category}
          </p>
          <p>
            {post.likes.length}
            <i className="bi bi-heart-fill text-danger mx-1"> </i>
          </p>
          <p className="fs-6">Posted: {post.createdAt}</p>
        </div>
        <h1 className="mt-3">{post.title}</h1>
        <p>{post.description}</p>
      </div>
    </>
  );
}

export default PostDetails;
