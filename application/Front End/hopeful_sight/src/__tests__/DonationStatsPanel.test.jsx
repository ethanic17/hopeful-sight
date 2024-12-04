
import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect,test } from "vitest";
import {DonationStatsPanel} from '../components/DonationStatsPanel';
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

describe('DonationStatsPanel Component', () => {
  it('renders DonationStatsPanel component with correct content', async () => {
    
    render(
      <Provider store={store}>
        <DonationStatsPanel focusRegion={"West"}/>

      </Provider>
    
    );


  });

  it('renders DonationStatsPanel component with correct content', async () => {
    
    render(
      <Provider store={store}>
        <DonationStatsPanel focusRegion={"East"}/>

      </Provider>
    
    );


  });
  
});