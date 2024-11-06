import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userInfo: {
    loggedIn: false,
    name: null,
    username: null,
    email: null,
    accountType: null,
    accountId: null,
    donatorId: null,
    amountDonated: 0,
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      localStorage.setItem("token", action.payload);
      state.token = action.payload;
    },
    setInfo: (state, action) => {
      state.userInfo.loggedIn = true;
      state.userInfo.name = action.payload.name;
      state.userInfo.username = action.payload.username;
      state.userInfo.email = action.payload.email;
    },
    login: (state, action) => {
      state.userInfo.loggedIn = true;
      // state.userInfo.accountType = action.payload.accountType;
      state.userInfo.name = action.payload.name;
      state.userInfo.username = action.payload.username;
      state.userInfo.email = action.payload.email;
    },
    addAccountType: (state, action) => {
      localStorage.setItem("account_type", action.payload);
      state.userInfo.accountType = action.payload;
    },
    addAccountID: (state, action) => {
      localStorage.setItem("account_id", action.payload);
      state.userInfo.accountId = action.payload;
    },
    addAccountTypeID: (state, action) => {
      localStorage.setItem("donation_type_id", action.payload);
      state.userInfo.accountId = action.payload;
    },
    addDonationAmount: (state, action) => {
      state.userInfo.amountDonated =
        Number(state.userInfo.amountDonated) + Number(action.payload);
    },
  },
});

export const {
  setAuth,
  setInfo,
  login,
  addAccountType,
  addAccountID,
  addAccountTypeID,
  addDonationAmount,
} = userSlice.actions;

export default userSlice.reducer;
