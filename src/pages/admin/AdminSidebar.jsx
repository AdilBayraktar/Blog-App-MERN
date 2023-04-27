import React from "react";
import { Link } from "react-router-dom";

function AdminSidebar() {
  return (
    <>
      <ul className="list-group min-vh-100 border shadow">
        <h3 className="text-center my-4">Dashboard</h3>
        <li className="list-group-item">
          <Link to={"/admin-dashboard"}>Main</Link>
        </li>
        <li className="list-group-item">
          <Link to={"/admin-dashboard/users"}>Users</Link>
        </li>
        <li className="list-group-item">
          <Link to={"/admin-dashboard/posts"}>Posts</Link>
        </li>
        <li className="list-group-item">
          <Link to={"/admin-dashboard/categories"}>Categories</Link>
        </li>
        <li className="list-group-item">Comments</li>
      </ul>
    </>
  );
}

export default AdminSidebar;
