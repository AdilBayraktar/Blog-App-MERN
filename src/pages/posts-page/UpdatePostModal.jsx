import React, { useState } from "react";
import { toast } from "react-toastify";
import "./updatePostModal.css";
import { categories } from "../../dummyData";

function UpdatePostModal({ setUpdatePost, post }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  // const formData = new FormData();
  // formData.append("image", image);
  // formData.append("title", title);
  // formData.append("description", description);
  // formData.append("category", category);

  const submitUpdatePostHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Title is Required");
    if (description.trim() === "")
      return toast.error("Description is Required");
    if (category.trim() === "") return toast.error("Category is Required");
    const formData = {
      title,
      description,
      category,
    };
    console.log(formData);
    toast.success("Post Updated Successfully!");
  };
  return (
    <>
      <div className="update_post_modal">
        <form className="update_post_form" onSubmit={submitUpdatePostHandler}>
          <abbr title="close">
            <i
              onClick={() => setUpdatePost(false)}
              className="bi bi-x-circle-fill colse_btn"
            ></i>
          </abbr>
          <h2>Update Post</h2>
          <hr className="w-25" />
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              value={post.title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Select Category
            </label>
            <select
              className="form-select"
              aria-label="Default select example"
              placeholder="Select"
              value={post.category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option disabled value="">
                Select Category
              </option>
              {categories.map((cat) => {
                return (
                  <option key={cat._id} value={cat._id}>
                    {cat.title}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              rows="4"
              className="form-control"
              id="description"
              placeholder="type description here.."
              value={post.description}
              onChange={(e) => {
                setDescription(e.target.value);
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

export default UpdatePostModal;
