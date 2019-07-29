import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import { saga } from "./sagas";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];

const composedEnhancers = compose(
  applyMiddleware(routerMiddleware(history), sagaMiddleware),
  ...enhancers
);

export const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);

sagaMiddleware.run(saga);
