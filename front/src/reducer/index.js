import { combineReducers } from "redux";
// import AuthReducer from "./authReducer";
import productReducer from "./productReducer";
import devisReducer from "./devisReducer";
import dashboardReducer from "./dashboardReducer";
import auth from "./auth";
import message from "./message";

export default combineReducers({
  // auth: AuthReducer,
  auth: auth,
  message: message,
  products: productReducer,
  devis: devisReducer,
  dashboardInfo: dashboardReducer,
});
