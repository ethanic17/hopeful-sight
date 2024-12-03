import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/features/userSlice";

const mockStore = (loggedIn = false, donator = false) =>
  configureStore({
    reducer: {
      user: userReducer,
    },
    preloadedState: {
      user: {
        userInfo: {
          loggedIn,
          donator,
        },
      },
    },
  });

export default mockStore;
