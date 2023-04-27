import React from "react";
import AdminMain from "./AdminMain";
import AdminSidebar from "./AdminSidebar";

function AdminDashboard() {
  return (
    <>
      <div className="row">
        <div className="col-3">
          <AdminSidebar />
        </div>
        <div className="col-9">
          <AdminMain />
        </div>
      </div>
    </>
  );
}

export default AdminDashboard;
