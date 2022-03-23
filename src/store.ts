import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./redux/slices/list";

const store = configureStore({
  reducer: {
    list: listReducer,
  },
});

export default store;
