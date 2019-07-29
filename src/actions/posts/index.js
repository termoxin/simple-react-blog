import { GET_POSTS } from "./Types";

export const getPosts = () => ({
  type: GET_POSTS,
  payload: {
    request: {
      url: "/posts"
    }
  },
  meta: {
    asPromise: true
  }
});
