import { compose, applyMiddleware, createStore } from "redux";

import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

import logger from "redux-logger";

import { rootReducer } from "./RootReducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(
  Boolean
);

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares));

//root-reducer
export const store = createStore(persistedReducer, undefined, composeEnhancers);

export const persistor = persistStore(store);
