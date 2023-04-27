import React from "react";
import { Link } from "react-router-dom";

function Sidebar({ categories }) {
  return (
    <>
      <div className="container">
        <div className="p-4 bg-light rounded-4">
          <h4 className="fst mb-4">Categories</h4>
          <ol className="list-unstyled mb-0">
            <li className="">
              <div>
                <Link to={`/posts`}>All Posts</Link>
                <hr />
              </div>
            </li>
            {categories.map((category) => {
              return (
                <li className="" key={category._id}>
                  <div>
                    <Link to={`/posts/categories/${category.title}`}>
                      {category.title}
                    </Link>
                    <hr />
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
