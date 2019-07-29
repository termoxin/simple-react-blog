import * as postActions from "../../actions/post/Types";
import * as commentsActions from "../../actions/comments/Types";

import initialState from "./initialState";
import { getStatusCode } from "../../helpers/response";

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case postActions.GET_POST:
      return { ...state, loading: true };
    case postActions.GET_POST_SUCCESS:
      return { ...state, loading: false, post: action.payload.data };
    case postActions.GET_POST_ERROR:
      return {
        ...state,
        loading: false,
        error: getStatusCode(action.payload)
      };

    case commentsActions.CREATE_COMMMENT:
      return { ...state, loading: true };
    case commentsActions.CREATE_COMMMENT_SUCCESS:
      return { ...state, loading: false };
    case commentsActions.CREATE_COMMMENT_ERROR:
      return {
        ...state,
        loading: false,
        error: getStatusCode(action.payload)
      };
    default:
      return state;
  }
};

export default postReducer;
