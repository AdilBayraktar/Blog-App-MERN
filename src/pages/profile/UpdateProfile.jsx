import React, { useState } from "react";

function UpdateProfile({ setUpdateModal }) {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");

  const submitUpdateProfileHandler = (e) => {
    e.preventDefault();
    const updateUser = { name, bio };
    if (password.trim() !== "") {
      updateUser.password = password;
    }
    console.log(updateUser);
  };
  return (
    <>
      <div className="update_post_modal">
        <form
          className="update_post_form"
          onSubmit={submitUpdateProfileHandler}
        >
          <abbr title="close">
            <i
              className="bi bi-x-circle-fill colse_btn"
              onClick={() => setUpdateModal(false)}
            ></i>
          </abbr>
          <h2>Update Profile</h2>

          <div className="my-3">
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <textarea
              rows="4"
              className="form-control"
              id="description"
              placeholder="type Bio here.."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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

export default UpdateProfile;
