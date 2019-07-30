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
      return { ...state, isCreatingComment: true };
    case commentsActions.CREATE_COMMMENT_SUCCESS:
      const comment = action.payload.response.data;
      const updatedComments = [...state.post[1], comment];
      const post = [state.post[0], updatedComments];

      return {
        ...state,
        post,
        isCreatingComment: false
      };
    case commentsActions.CREATE_COMMMENT_ERROR:
      return {
        ...state,
        error: getStatusCode(action.payload),
        isCreatingComment: false
      };
    default:
      return state;
  }
};

export default postReducer;
