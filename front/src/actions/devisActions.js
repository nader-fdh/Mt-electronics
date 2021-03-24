import { POST_DEVIS, GET_DEVIS } from "./types";
import axios from "axios";
import { object } from "prop-types";

// function Get devis

export const getDevis = () => (dispatch) => {
  // setToken();
  axios
    .get("/devis")
    .then((res) =>
      dispatch({
        type: GET_DEVIS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const postDevis = (input, files) => (dispatch) => {
  // console.log(input);
  // let files = Object.values(files);

  let fileArray = Object.values(files);
  let formData = new FormData();
  fileArray.map((file) => formData.append("photos", file));

  console.log(typeof files);
  formData.append("input", JSON.stringify(input));
  axios
    .post("/devis", formData)
    .then((res) =>
      dispatch({
        type: POST_DEVIS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
