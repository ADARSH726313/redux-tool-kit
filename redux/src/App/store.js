import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/Reducer/Slice"
export const store = configureStore({ reducer: counterSlice  });