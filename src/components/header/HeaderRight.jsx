import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logoutUser } from "../../redux/apiCalls/authApiCall";

function HeaderRight() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  return (
    <>
      <div className="header-right">
        {user ? (
          <>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <button
                  className="dropdown-toggle text-light px-3 bg-danger bg-opacity-10 border-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={user.profileImage.url}
                      alt=""
                      className="rounded-circle mx-1"
                      width="40px"
                    />
                    {user.userName}
                  </div>
                </button>
                <ul className="dropdown-menu dropdown-menu-light">
                  <li>
                    <Link
                      to={`/profile/${user._id}`}
                      className="dropdown-item"
                      href="/#"
                    >
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      onClick={() => dispatch(logoutUser())}
                      to={"/"}
                    >
                      Logout
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </>
        ) : (
          <>
            <Link to={"/signup"} className="header-right-link">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Sign Up</span>
            </Link>
            <Link to={"/login"} className="header-right-link">
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login</span>
            </Link>
          </>
        )}
      </div>
    </>
  );
}

export default HeaderRight;
