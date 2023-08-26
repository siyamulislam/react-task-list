import { configureStore } from "@reduxjs/toolkit"; 
import taskReducer from "./taskSlice";

const store = configureStore({
  reducer: {
    tasksReducer: taskReducer,
  },
});

export default store;