import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  CHECK_USER,
} from "./types";
import axios from "axios";
import setToken from "../setToken";

export const registerUser = (info, file) => (dispatch) => {
  let formData = new FormData();
  formData.append("avatar", file);
  formData.append("info", JSON.stringify(info));
  axios
    .post("/register", formData)
    .then((res) =>
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const loadUser = () => (dispatch) => {
  setToken();
  axios
    .get("/login")
    .then((res) =>
      dispatch({
        type: LOAD_USER_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_USER_FAIL,
        payload: err.response.data.error,
      })
    );
};

export const loginUser = (data) => (dispatch) => {
  axios
    .post("/login", data)
    .then((res) =>
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOGIN_FAIL,
        payload: err.response.data.errors,
      })
    );
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};

export const checkUser = () => (dispatch) => {
  axios
    .get("/login/auth", {
      headers: { "auth-token": localStorage.getItem("token") },
    })
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: CHECK_USER,
      });
    })
    .catch((err) => console.log(err));
};
