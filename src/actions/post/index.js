import { GET_POST } from "./Types";

export const getPost = id => ({
  type: GET_POST,
  payload: {
    request: {
      url: `/posts/${id}`
    }
  }
});
