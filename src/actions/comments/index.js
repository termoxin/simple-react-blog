import { CREATE_COMMMENT } from "./Types";

export const createComment = data => ({
  type: CREATE_COMMMENT,
  payload: {
    request: {
      url: "/comments",
      method: "post",
      data
    }
  },
  meta: {
    asPromise: true
  }
});
