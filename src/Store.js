import { Platform } from "react-native";
import { createStore, applyMiddleware, compose } from "redux";
import devTools from "remote-redux-devTools-sp";
import promise from "redux-promise";
import thunk from "redux-thunk";
import logger from "redux-logger";

import RootReducer from "./Reducers";

const middleware = applyMiddleware(promise, thunk);

const Store = createStore(
  RootReducer,
  compose(
    middleware,
    devTools({
      name: Platform.OS,
      hostName: "localhost",
      port: 5678
    })
  )
);

export default Store;
