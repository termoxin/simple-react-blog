import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_ERROR
} from "../../actions/post/Types";
import initialState from "./initialState";
import { getStatusCode } from "../../helpers/response";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, loading: true };
    case GET_POST_SUCCESS:
      return { ...state, loading: false, post: action.payload.data };
    case GET_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: getStatusCode(action.payload)
      };
    default:
      return state;
  }
};

export default userReducer;
