import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT,
  CHECK_USER,
} from "../actions/types";

const initState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  error: null,
};
const AuthReducer = (state = initState, action) => {
  switch (action.type) {
    case CHECK_USER:
      return { ...state, isAuth: true };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        errors: null,
      };
    case REGISTER_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        errors: null,
      };
    case LOGIN_FAIL:
    case LOAD_USER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        isAuth: false,
        errors: action.payload,
      };
    case REGISTER_FAIL:
      // localStorage.setItem("token");
      return {
        ...state,
        isAuth: true,
        errors: action.payload,
      };
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        errors: null,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        isAuth: false,
        errors: null,
        user: null,
      };

    default:
      return state;
  }
};

export default AuthReducer;
