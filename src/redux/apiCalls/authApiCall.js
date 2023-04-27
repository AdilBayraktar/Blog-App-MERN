import { authActions } from "../slices/authSlice";
import baseRequest from "../../utils/baseURL";
import { toast } from "react-toastify";

function loginUser(user) {
  return async (dispatch) => {
    try {
      const response = await baseRequest.post("/api/auth/login", user);
      dispatch(authActions.login(response.data));
      localStorage.setItem("userInfo", JSON.stringify(response.data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

function logoutUser() {
  return (dispatch) => {
    dispatch(authActions.logout());
    localStorage.removeItem("userInfo");
  };
}

function signupNewUser(user) {
  return async (dispatch) => {
    try {
      const response = await baseRequest.post("/api/auth/signup", user);
      dispatch(authActions.signup(response.data.message));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export { loginUser, logoutUser, signupNewUser };
