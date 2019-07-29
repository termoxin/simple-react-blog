import * as postsActions from "../../actions/posts/Types";

import initialState from "./initialState";
import { getStatusCode } from "../../helpers/response";

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case postsActions.GET_POSTS:
      return { ...state, loading: true };
    case postsActions.GET_POSTS_SUCCESS:
      return { ...state, loading: false, posts: action.payload.data };
    case postsActions.GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: getStatusCode(action.payload)
      };

    default:
      return state;
  }
};

export default postsReducer;
