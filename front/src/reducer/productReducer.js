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
} from "../actions/types";

const initState = [];
const productReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    default:
      return state;
  }
};

export default productReducer;
