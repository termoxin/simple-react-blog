import { GET_POST, CREATE_POST } from "./Types";

export const getPost = id => ({
  type: GET_POST,
  payload: {
    request: [{ url: `/posts/${id}` }, { url: `/comments?postId=${id}` }]
  }
});

export const createPost = data => ({
  type: CREATE_POST,
  payload: {
    request: {
      url: "/posts",
      method: "post",
      data
    }
  },
  meta: {
    asPromise: true
  }
});
