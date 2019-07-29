import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_FAILURE
} from "../../actions/user/Types";
import initialState from "./initialState";

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload.data };
    case GET_USER_FAILURE:
      return { ...state, loading: false, error: "error" };
    default:
      return state;
  }
};

export default userReducer;
