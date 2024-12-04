import React from 'react';
import { render } from '@testing-library/react';
import {MapPage} from '../pages/Map';
import { describe, it, expect } from "vitest";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../app/features/userSlice";
import appReducer from "../app/features/appSlice";


const store = configureStore({
    reducer: {
      user: userReducer,
      app: appReducer,
    },
    preloadedState: {
      user: {
        token: "",
        userInfo: {
          loggedIn: false,
          username: null,
          email: null,
          donator: false,
          account: {},
        },
      },
      app: {
        loading: false,
      },
    },
  });

describe('Map Component', () => {
    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <MapPage />
            </Provider>
        );
    });

    // Add more test cases here as needed
});

