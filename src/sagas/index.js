import { all, takeLatest } from "redux-saga/effects";
import { getUserData } from "./user";

function* actionWatcher() {
  yield takeLatest("GET_USER_REQUEST", getUserData);
}

export function* saga() {
  yield all([actionWatcher()]);
}
