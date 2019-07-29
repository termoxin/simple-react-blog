import { createRequestInstance, watchRequests } from "redux-saga-requests";
import { createDriver } from "redux-saga-requests-axios";

export function* saga(axiosInstance) {
  yield createRequestInstance({ driver: createDriver(axiosInstance) });
  yield watchRequests();
}
