import { SEARCH_REQUEST, SEARCH_SUCCESS, SEARCH_FAILURE } from "../actions/types";
const initialState = {
    search: null,
    loading: true,
    error: {}
};

export default function(state = initialState, action) {
    const { type, payload } = action;
    
    switch (type) {
      case "SEARCH_REQUEST":
        return {
          ...state,
          loading: true,
          errorMessage: null
        };
      case "SEARCH_SUCCESS":
        return {
          ...state,
          loading: false,
          movies: payload
        };
      case "SEARCH_FAILURE":
        return {
          ...state,
          loading: false,
          errorMessage: action.error
        };
      default:
        return state;
    }
  };