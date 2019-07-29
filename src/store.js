import { createStore, compose, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import { createLogger } from "redux-logger";
import { requestsPromiseMiddleware } from "redux-saga-requests";
import axios from "axios";

import { saga } from "./sagas";
import rootReducer from "./reducers";

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];

const logger = createLogger();

const composedEnhancers = compose(
  applyMiddleware(
    routerMiddleware(history),
    requestsPromiseMiddleware(),
    sagaMiddleware,
    logger
  ),
  ...enhancers
);

export const store = createStore(
  rootReducer(history),
  initialState,
  composedEnhancers
);

const axiosInstance = axios.create({
  baseURL: "https://simple-blog-api.crew.red"
});

sagaMiddleware.run(saga, axiosInstance);
