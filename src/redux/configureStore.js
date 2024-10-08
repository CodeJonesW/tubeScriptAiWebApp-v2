import { configureStore } from "@reduxjs/toolkit";

import monitorReducersEnhancer from "./middleware/monitorReducer";
import loggerMiddleware from "./middleware/logger";
import rootReducer from "./index.js";

export default function configureAppStore(preloadedState) {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().prepend(loggerMiddleware),
    preloadedState,
    enhancers: [monitorReducersEnhancer],
  });

  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }

  return store;
}
