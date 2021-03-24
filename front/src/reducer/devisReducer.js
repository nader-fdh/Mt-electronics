import { POST_DEVIS, GET_DEVIS } from "../actions/types";

const initState = {};

const devisReducer = (state = initState, action) => {
  switch (action.type) {
    case POST_DEVIS:
      return {
        ...state,
        devis: action.payload,
      };
    case GET_DEVIS:
      return {
        ...state,
        devis: action.payload,
      };

    default:
      return state;
  }
};

export default devisReducer;
