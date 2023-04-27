import React, { useState } from "react";
import AdminSidebar from "./AdminSidebar";
import { categories } from "../../dummyData";
import AddNewCategory from "./AddNewCategory";

function CategoriesTable() {
  const [newCategory, setNewCategory] = useState(false);
  return (
    <>
      <div className="row">
        <div className="col-3">
          <AdminSidebar />
        </div>
        <div className="col-9">
          <div className="container">
            <button
              className="btn btn-success my-3"
              onClick={() => setNewCategory(true)}
            >
              Add New Category
            </button>
            <table className="table table-striped table-bordered m-auto">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Category name</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((item) => (
                  <tr key={item._id} className="align-items-center">
                    <td>{item.id}</td>
                    <td>
                      <span>{item.title}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {newCategory && <AddNewCategory setNewCategory={setNewCategory} />}
    </>
  );
}

export default CategoriesTable;
