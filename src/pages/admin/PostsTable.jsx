import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import { posts } from "../../dummyData";

function PostsTable() {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <AdminSidebar />
        </div>
        <div className="col-9">
          <div className="container">
            <table class="table table-striped table-bordered m-auto">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Title</th>
                  <th scope="col">Category</th>
                  <th scope="col">User</th>

                  <th>Likes</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((item) => (
                  <tr key={item} className="align-items-center">
                    <td>{item._id}</td>
                    <td>
                      <img
                        src={item.image}
                        alt=""
                        width="35px"
                        className="rounded-circle"
                      />{" "}
                      <span>{item.title}</span>
                    </td>
                    <td>{item.category}</td>
                    <td>{item.user.username}</td>
                    <td>
                      <div className="btn-group">
                        <Link
                          className="btn btn-info mx-1"
                          to={`/posts/details/${item._id}`}
                        >
                          View Post
                        </Link>
                        <button className="btn btn-danger mx-1">
                          Delete Post
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default PostsTable;
