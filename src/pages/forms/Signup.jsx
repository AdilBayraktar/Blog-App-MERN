import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { signupNewUser } from "../../redux/apiCalls/authApiCall";
import Swal from "sweetalert2";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { signupMessage } = useSelector((state) => state.auth);
  console.log("Teeeeeeeeeeest: ", signupMessage);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState(null);
  const submitSignupFormHandler = (e) => {
    e.preventDefault();
    console.log(gender);
    if (userName.trim() === "") return toast.error("Username is required");
    if (email.trim() === "") return toast.error("Email address is required");
    if (password.trim() === "") return toast.error("Password is required");
    const formData = {
      userName,
      email,
      password,
      gender,
    };
    dispatch(signupNewUser(formData));
  };
  if (signupMessage) {
    Swal.fire({
      title: signupMessage,
      // text: "You won't be able to revert this!",
      icon: "success",
      // showCancelButton: true,
      confirmButtonColor: "rgb(21 137 62)",
      // cancelButtonColor: "#3085d6",
      confirmButtonText: "Login",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/login");
      }
    });
  }
  return (
    <>
      <form
        className="w-50 m-auto my-5 border shadow p-5"
        onSubmit={submitSignupFormHandler}
      >
        <h1 className="h3 mb-5 fw-bold text-primary text-center">
          Create New Account
        </h1>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingNamet"
            placeholder="Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <label htmlFor="floatingNamet">Username</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            onChange={() => setGender(true)}
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            onChange={() => setGender(false)}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Female
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Signup
        </button>
        <div className="my-2 text-center">
          <Link to={"/login"} className="text-muted ">
            Already have an account? <strong>login</strong>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Signup;
