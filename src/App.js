import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import CreatePost from "./pages/posts-page/create-post/CreatePost";
import Header from "./components/header/Header";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Login from "./pages/forms/Login";
import Signup from "./pages/forms/Signup";
import Home from "./pages/home-page/Home";
import Posts from "./pages/posts-page/Posts";
import PostDetails from "./components/posts/PostDetails";
import Category from "./pages/category-page/Category";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import Profile from "./pages/profile/Profile";
import UsersTable from "./pages/admin/UsersTable";
import CategoriesTable from "./pages/admin/CategoriesTable";
import PostsTable from "./pages/admin/PostsTable";
import ResetPassword from "./pages/forms/ResetPassword";
import { useSelector } from "react-redux";

function App() {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {" "}
      <ToastContainer theme="colored" />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="posts">
          <Route index element={<Posts />} />
          <Route path="details/:postId" element={<PostDetails />} />
          <Route
            path="create-post"
            element={user ? <CreatePost /> : <Navigate to={"/"} />}
          />
          <Route path="categories/:categoryTitle" element={<Category />} />
        </Route>

        <Route path="/admin-dashboard">
          <Route
            index
            element={user?.isAdmin ? <AdminDashboard /> : <Navigate to={"/"} />}
          />
          <Route
            path="users"
            element={user?.isAdmin ? <UsersTable /> : <Navigate to={"/"} />}
          />
          <Route
            path="categories"
            element={
              user?.isAdmin ? <CategoriesTable /> : <Navigate to={"/"} />
            }
          />
          <Route
            path="posts"
            element={user?.isAdmin ? <PostsTable /> : <Navigate to={"/"} />}
          />
        </Route>
        <Route
          path="/login"
          element={!user ? <Login /> : <Navigate to={"/"} />}
        />
        <Route
          path="/signup"
          element={!user ? <Signup /> : <Navigate to={"/"} />}
        />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
