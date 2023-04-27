import React from "react";
import { Link } from "react-router-dom";

function PostsList({ posts }) {
  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-5">
          {posts.map((post) => {
            return (
              <div className="col" key={post._id}>
                <div className="card h-100 shadow">
                  <img
                    className="bd-placeholder-img card-img-top"
                    alt=""
                    width="100%"
                    height="225"
                    src={post.image}
                  />

                  <div className="card-body">
                    <h4 className="card-title">{post.title}</h4>
                    <p className="card-text">{post.description}</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <Link
                          to={`/posts/details/${post._id}`}
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </Link>
                      </div>
                      <small className="text-muted">{post.createdAt}</small>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default PostsList;
