import * as postsActions from "../../actions/posts/Types";
import * as postActions from "../../actions/post/Types";

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

    case postActions.CREATE_POST:
      return { ...state, loading: true };
    case postActions.CREATE_POST_SUCCESS: {
      const post = action.payload.response.data;
      const updatedPosts = [...state.posts, post];

      return { ...state, posts: updatedPosts, loading: false };
    }
    case postActions.CREATE_POST_ERROR: {
      return { ...state, loading: false, error: getStatusCode(action.payload) };
    }

    default:
      return state;
  }
};

export default postsReducer;
