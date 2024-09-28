import configureStore from "@reduxjs/toolkit";
import appSlice from "../features/appSlice";
import userSlice from "../features/userSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    user: userSlice,
  },
});

export default store;
