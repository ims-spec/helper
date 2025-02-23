import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./todosSlice";
import authSlice from "./authSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authSlice,
  },
});
