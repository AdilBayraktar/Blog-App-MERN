import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../../redux/apiCalls/authApiCall";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitLoginFormHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email address is required");
    if (password.trim() === "") return toast.error("Password is required");
    const formData = {
      email,
      password,
    };
    dispatch(loginUser(formData));
  };

  return (
    <>
      <form
        className="w-50 m-auto my-5 border shadow p-5"
        onSubmit={submitLoginFormHandler}
      >
        <h1 className="h3 mb-5 fw-bold text-primary text-center">Login</h1>
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
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Login
        </button>
        <div className="my-2 text-center">
          <Link to={"/signup"} className="text-muted ">
            Do not have an account? <strong>Create new Account</strong>
          </Link>
        </div>
      </form>
    </>
  );
}

export default Login;
