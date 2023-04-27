import React from "react";
import { Link } from "react-router-dom";
import PostsList from "../../components/posts/PostsList";
import Sidebar from "../../components/posts/Sidebar";
import { posts, categories } from "../../dummyData";
import "./home.css";
function Home() {
  return (
    <>
      <section className="home">
        <div className="home_hero p-5">
          <h1 className="hero_title m-auto">Welcom to Blog App</h1>
        </div>
        <div className="container">
          <div className="row my-5">
            <div className="col-lg-8 col-12">
              <PostsList posts={posts.slice(0, 4)} />
              <div className="d-flex justify-content-center my-5">
                <Link className="btn btn-outline-primary text" to={"/posts"}>
                  See All Posts
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-8">
              <Sidebar categories={categories} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
