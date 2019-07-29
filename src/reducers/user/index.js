import initialState from "./initialState";
import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from "../../actions/user/Types";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, user: action.user, loading: false };
    case GET_USER_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default userReducer;
