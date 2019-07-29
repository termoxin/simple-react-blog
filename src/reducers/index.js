import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import post from "./post";

export default history =>
  combineReducers({
    post,
    router: connectRouter(history)
  });
