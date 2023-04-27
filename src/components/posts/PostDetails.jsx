import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { posts } from "../../dummyData";
import UpdatePostModal from "../../pages/posts-page/UpdatePostModal";
import AddComment from "../comments/AddComment";
import CommentsList from "../comments/CommentsList";

function PostDetails() {
  const params = useParams();
  const post = posts.filter((post) => post._id.toString() === params.postId)[0];
  const [image, setImage] = useState(null);
  const [updatePost, setUpdatePost] = useState(false);
  const submitImageFormHandler = (e) => {
    e.preventDefault();
    if (!image) return toast.warning("You must choose an image file!");
    console.log(image);
  };

  const deletePostHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="container bg-light p-5 my-5 rounded shadow text-center">
        <img
          src={image ? URL.createObjectURL(image) : post.image}
          alt=""
          width="100%"
          className="rounded-5"
        />
        <form
          className="my-3 d-flex justify-content-around align-items-center"
          onSubmit={submitImageFormHandler}
        >
          <label>
            <i className="bi bi-image-fill"></i> Select new image
          </label>
          <input
            type="file"
            className="form-control my-2 w-50"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <button className="btn btn-secondary">Upload</button>
        </form>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <div>
            <img
              className="rounded-circle mx-1"
              src={post.user.image}
              alt=""
              width="40px"
            />
            <span>{post.user.username}</span>
          </div>
          <p className="px-3 py-2 bg-dark bg-opacity-25 fs-6 text-dark rounded-5">
            Category: {post.category}
          </p>

          <p className="fs-6">Posted: {post.createdAt}</p>
        </div>
        <h1 className="mt-3">{post.title}</h1>
        <p>
          {post.description} Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Consectetur optio inventore animi dolor esse, sequi illum quo
          quidem voluptate laudantium similique reiciendis totam maiores sunt
          ullam molestiae quisquam libero quasi. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Rerum officia labore ducimus? Ut
          inventore eos quibusdam molestias cumque non nihil explicabo delectus
          quas, maxime eveniet ex doloribus tenetur quasi corrupti.
        </p>
        <CommentsList />
        <AddComment />
        <div className="d-flex justify-content-between align-items-center mt-3">
          <p>
            {post.likes.length} Likes
            <i className="bi bi-heart text-danger mx-1"></i>
          </p>
          <div>
            <i
              onClick={() => setUpdatePost(true)}
              className="bi bi-pencil-square fs-4"
            ></i>
            <i
              onClick={deletePostHandler}
              className="bi bi-trash-fill fs-4"
            ></i>
          </div>
        </div>
      </div>
      {updatePost && (
        <UpdatePostModal setUpdatePost={setUpdatePost} post={post} />
      )}
    </>
  );
}

export default PostDetails;
