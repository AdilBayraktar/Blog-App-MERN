import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { posts } from "../../dummyData";
import PostsList from "../../components/posts/PostsList";
import Swal from "sweetalert2";
import UpdateProfile from "./UpdateProfile";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserProfile,
  uploadProfileImage,
} from "../../redux/apiCalls/profileApiCall";
import { json, useParams } from "react-router-dom";

function Profile() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.profile);
  const { user } = useSelector((state) => state.auth);
  const token = localStorage.getItem("userInfo");
  console.log(user.token);
  const [image, setImage] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);

  useEffect(() => {
    dispatch(getUserProfile(id));
  }, []);

  const submitImageFormHandler = (e) => {
    e.preventDefault();
    if (!image) return toast.warning("You must choose an image file!");
    const formData = new FormData();
    formData.append("image", image);
    dispatch(uploadProfileImage(formData, user.token));
  };

  const deleteAccountHandler = () => {
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
      <div className="container">
        <div className="card my-5 p-5 shadow rounded-5 border-0">
          <img
            src={
              image ? URL.createObjectURL(image) : profile?.profileImage?.url
            }
            width="200px"
            alt=""
            className="rounded-circle mt-3 m-auto"
          />
          <form
            className="my-3 d-flex flex-column w-50 m-auto text-center"
            onSubmit={submitImageFormHandler}
          >
            <label>
              <i className="bi bi-image-fill"></i> Change Profile image
            </label>
            <input
              type="file"
              className="my-2 m-auto form-control"
              onChange={(e) => setImage(e.target.files[0])}
            />
            <button className="btn btn-secondary">Upload</button>
          </form>
          <h2 className="text-center">{profile?.userName}</h2>
          <div className="mt-3 text-center">
            <div className="">
              <strong className="text-muted">Join date:</strong>
              <p className="text-success fw-bold">
                {new Date(profile?.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div>
              <p>{profile?.bio}</p>
            </div>
            <button
              className="btn btn-success"
              onClick={() => setUpdateModal(true)}
            >
              Update Profile Info
            </button>
          </div>
        </div>
        <h4>{profile?.userName}'s Posts: </h4>
        <hr className="w-25" />
        <PostsList posts={posts} />
        <div className="my-5">
          <button className="btn btn-danger" onClick={deleteAccountHandler}>
            Delete Account
          </button>
        </div>
      </div>
      {updateModal && <UpdateProfile setUpdateModal={setUpdateModal} />}
    </>
  );
}

export default Profile;
