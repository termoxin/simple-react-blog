import { put, call } from "redux-saga/effects";
import { getUser } from "../services/user";

export function* getUserData({ username }) {
  try {
    const user = yield call(getUser, username);

    yield put({ type: "GET_USER_SUCCESS", user: user.data });
  } catch (err) {
    yield put({ type: "GET_USER_FAILURE" });
  }
}
