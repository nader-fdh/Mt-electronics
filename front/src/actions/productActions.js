import {
  Add_PRODUCT_SUCCESS,
  Add_PRODUCT_FAIL,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAIL,
  CHECK_USER,
} from "./types";
import axios from "axios";
import setToken from "../setToken";
import authHeader from "../services/auth-header";
// function Add product
export const addProduct = (input) => (dispatch) => {
  axios
    .post("/product", input)
    .then((res) => dispatch(getProduct()))
    .catch((err) => console.log(err));
};

// function Get product

export const getProduct = () => (dispatch) => {
  setToken();
  axios
    .get("/product")
    .then((res) =>
      dispatch({
        type: GET_PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

// function delete product

export const deleteProduct = (id) => (dispatch) => {
  setToken();
  axios
    .delete(`/product/${id}`)
    .then((res) => dispatch(getProduct()))
    .catch((err) => console.log(err));
};

// function update product

export const updateProduct = (id, updatedProduct) => (dispatch) => {
  axios
    .put(`/product/${id}`, updatedProduct)
    .then((res) => dispatch(getProduct()))
    .catch((err) => console.log(err));
};
