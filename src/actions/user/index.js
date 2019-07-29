import { GET_USER_REQUEST } from "./Types";

export const getUser = username => ({
  type: GET_USER_REQUEST,
  payload: {
    request: {
      url: "/posts"
    }
  },
  username
});
