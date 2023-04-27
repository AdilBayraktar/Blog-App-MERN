import React from "react";
import { Link } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";

function UsersTable() {
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
                  <th scope="col">User</th>
                  <th scope="col">Email</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                  <tr key={item} className="align-items-center">
                    <td>{item}</td>
                    <td>
                      <img
                        src="/images/user-avatar.png"
                        alt=""
                        width="35px"
                        className="rounded-circle"
                      />{" "}
                      <span>UserName</span>
                    </td>
                    <td>test@gmail.com</td>
                    <td>
                      <div className="btn-group">
                        <Link className="btn btn-info mx-1" to={"/profile/1"}>
                          View Profile
                        </Link>
                        <button className="btn btn-danger mx-1">
                          Delete Profile
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

export default UsersTable;
