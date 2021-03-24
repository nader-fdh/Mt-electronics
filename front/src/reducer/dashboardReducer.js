import { UPDATE_DASHBOARD_INFO, GET_DASHBOARD_INFO } from "../actions/types";

const initState = [];
const dashboardReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_DASHBOARD_INFO:
      return {
        ...state,
        dashboardInfo: action.payload,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
