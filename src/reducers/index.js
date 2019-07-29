import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import post from "./post";
import posts from "./posts";

export default history =>
  combineReducers({
    post,
    posts,
    router: connectRouter(history)
  });
