import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function HeaderLeft({ toggleMenu, setToggleMenu }) {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      <div className="header-left">
        <Link className="header-logo" to={"/"}>
          <strong>Blog App</strong>
        </Link>
        <div
          className="header-menu"
          onClick={() => {
            setToggleMenu(!toggleMenu);
          }}
        >
          {toggleMenu ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-list"></i>
          )}
        </div>
        <nav
          className="navbar"
          style={{
            clipPath: toggleMenu && "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
          }}
        >
          <ul className="nav-links m-auto">
            <li
              className="nav-link"
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              <Link to={"/"}>Home</Link>
            </li>
            <li
              className="nav-link"
              onClick={() => {
                setToggleMenu(false);
              }}
            >
              <Link to={"/posts"}>Posts</Link>
            </li>
            {user && (
              <li
                className="nav-link"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to={"/posts/create-post"}>Create</Link>
              </li>
            )}
            {user?.isAdmin && (
              <li
                className="nav-link"
                onClick={() => {
                  setToggleMenu(false);
                }}
              >
                <Link to={"/admin-dashboard"}>Dashboard</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default HeaderLeft;
