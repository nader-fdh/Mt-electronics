import { UPDATE_DASHBOARD_INFO, GET_DASHBOARD_INFO } from "./types";
import axios from "axios";
import setToken from "../setToken";

// function get dashboard info

export const getDashboardInfo = () => (dispatch) => {
  setToken();
  axios
    .get("/dashboard")
    .then((res) =>
      dispatch({
        type: GET_DASHBOARD_INFO,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// function update dashboard info

export const updateDashboardInfo = (id, updatedDashboardInfo) => (dispatch) => {
  axios
    .put(`/dashboard/${id}`, updatedDashboardInfo, {
      headers: { "auth-token": localStorage.getItem("token") },
    })
    .then((res) => dispatch(getDashboardInfo()))
    .catch((err) => console.log(err));
};
