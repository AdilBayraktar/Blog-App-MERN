import baseRequest from "../../utils/baseURL";
import { toast } from "react-toastify";
import { profileActions } from "../slices/profileSlice";
import { authActions } from "../slices/authSlice";

function getUserProfile(user) {
  return async (dispatch) => {
    try {
      const response = await baseRequest.get(`/api/users/profile/${user}`);
      dispatch(profileActions.setProfile(response.data));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

function uploadProfileImage(newImage) {
  return async (dispatch, getState) => {
    try {
      const response = await baseRequest.post(
        `/api/users/profile/profile-image-upload`,
        newImage,
        {
          headers: {
            Authorization: `Bearer ${getState().auth.user.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      dispatch(profileActions.setProfileImage(response.data.profileImage));
      dispatch(authActions.setUserImage(response.data.profileImage));
      toast.success(response.data.message);
      //update userinfo in localStorage
      const user = JSON.parse(localStorage.getItem("userInfo"));
      user.profileImage = response.data?.profileImage;
      localStorage.setItem("userInfo", JSON.stringify(user));
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
}

export { getUserProfile, uploadProfileImage };
