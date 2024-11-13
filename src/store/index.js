import { configureStore } from "@reduxjs/toolkit";
import { appReducer,changeToken } from "./slices/appSlice";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export { store, changeToken };
