import {
  GET_POST,
  GET_POST_SUCCESS,
  GET_POST_FAILURE
} from "../../actions/post/Types";
import initialState from "./initialState";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return { ...state, loading: true };
    case GET_POST_SUCCESS:
      return { ...state, loading: false, post: action.payload.data };
    case GET_POST_FAILURE:
      return { ...state, loading: false, error: "error" };
    default:
      return state;
  }
};

export default userReducer;
