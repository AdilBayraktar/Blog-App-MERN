import React, { useState } from "react";
import { toast } from "react-toastify";

function AddNewCategory({ setNewCategory }) {
  const [category, setCategory] = useState("");
  const submitNewCategoryHandler = (e) => {
    e.preventDefault();
    if (category.trim() === "")
      return toast.error("Category must be not empty");
    console.log({ category });
  };
  return (
    <>
      <div className="update_post_modal">
        <form className="update_post_form" onSubmit={submitNewCategoryHandler}>
          <abbr title="close">
            <i
              onClick={() => setNewCategory(false)}
              className="bi bi-x-circle-fill colse_btn"
            ></i>
          </abbr>
          <h2>Create New Category</h2>
          <div className="my-3">
            <input
              className="form-control"
              placeholder="Category Name"
              onChange={(e) => {
                setCategory(e.target.value);
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

export default AddNewCategory;
