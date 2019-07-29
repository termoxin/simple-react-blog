import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import axios from "axios";

import { saga } from "./sagas";
import rootReducer from "./reducers";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];

const logger = createLogger();

const composedEnhancers = compose(
  applyMiddleware(routerMiddleware(history), sagaMiddleware, logger),
  ...enhancers
);

export const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);

const axiosInstance = axios.create({
  baseURL: "https://api.github.com"
});

sagaMiddleware.run(saga, axiosInstance);
