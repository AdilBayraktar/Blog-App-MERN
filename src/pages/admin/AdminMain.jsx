import React from "react";

function AdminMain() {
  return (
    <>
      <div className="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-5 p-3">
          <div class="col d-flex align-items-start shadow p-3 border">
            <i className="bi bi-person fs-1 mx-3"></i>
            <div>
              <h3 class="fw-bold mb-0 fs-4">Users</h3>
              <p className="text-success fw-bold fs-4">100</p>
            </div>
          </div>
          <div class="col d-flex align-items-start shadow p-3 border">
            <i className="bi bi-person fs-1 mx-3"></i>
            <div>
              <h3 class="fw-bold mb-0 fs-4">Posts</h3>
              <p className="text-success fw-bold fs-4">23</p>
            </div>
          </div>
          <div class="col d-flex align-items-start shadow p-3 border">
            <i className="bi bi-person fs-1 mx-3"></i>
            <div>
              <h3 class="fw-bold mb-0 fs-4">Categories</h3>
              <p className="text-success fw-bold fs-4">12</p>
            </div>
          </div>
          <div class="col d-flex align-items-start shadow p-3 border">
            <i className="bi bi-person fs-1 mx-3"></i>
            <div>
              <h3 class="fw-bold mb-0 fs-4">Comments</h3>
              <p className="text-success fw-bold fs-4">112</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminMain;
