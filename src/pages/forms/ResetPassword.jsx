import React, { useState } from "react";
import { toast } from "react-toastify";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const submitResetPasswordFormHandler = (e) => {
    e.preventDefault();
    if (password.trim() === "") return toast.error("Password is required");
    const formData = {
      password,
    };
    console.log(formData);
  };
  return (
    <>
      <form
        className="w-50 m-auto my-5 border shadow p-5"
        onSubmit={submitResetPasswordFormHandler}
      >
        <h1 className="h3 mb-5 fw-bold text-primary text-center">
          Reset Password
        </h1>
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
          Submit
        </button>
      </form>
    </>
  );
}

export default ResetPassword;
