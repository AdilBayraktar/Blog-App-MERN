import React, { useState } from "react";
import "./createPost.css";
import { categories } from "../../../dummyData";
import { toast } from "react-toastify";

function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  // const formData = new FormData();
  // formData.append("image", image);
  // formData.append("title", title);
  // formData.append("description", description);
  // formData.append("category", category);

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Title is Required");
    if (description.trim() === "")
      return toast.error("Description is Required");
    if (category.trim() === "") return toast.error("Category is Required");
    if (!image) return toast.error("Image is Required");
    const formData = {
      title,
      description,
      category,
      image,
    };
    console.log(formData);
    toast.success("Post Created Successfully!");
  };

  return (
    <>
      <form
        className="w-75 m-auto bg-light my-5 p-5 rounded-4"
        onSubmit={submitFormHandler}
      >
        <h1>Create New Post</h1>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
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
            value={category}
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
            style={{ height: "200px" }}
            className="form-control"
            id="description"
            placeholder="type description here.."
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Select Image
          </label>
          <input
            type="file"
            className="form-control"
            id="image"
            onChange={(e) => {
              setImage(e.target.files[0]);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default CreatePost;
