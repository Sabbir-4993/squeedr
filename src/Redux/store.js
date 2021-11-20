import { configureStore } from "@reduxjs/toolkit";

// import all reducer here
import mobileSideBar from "./Reducer";
import home from "./HomeReducer";

export const store = configureStore({
  reducer: {
    //   general syntax to pass all reducer to store
    mobileSideBar: mobileSideBar,
    home: home,
  },
});
