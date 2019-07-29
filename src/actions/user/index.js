import { GET_USER } from "./Types";

export const getUser = username => ({
  type: GET_USER,
  payload: {
    request: {
      url: `/users/${username}`
    }
  }
});
