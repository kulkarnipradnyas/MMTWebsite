import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducer/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./reducer/rootReducer", () => {
    store.replaceReducer(rootReducer);
  });
}

export type RootState = ReturnType<typeof store.getState>;

export default store;
