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
    accountInfo: {},
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
    addAccountInfo: (state, action) => {
      localStorage.setItem("account_info", JSON.stringify(action.payload));
      state.userInfo.accountInfo = action.payload;
    },
    addDonationAmount: (state, action) => {
      let oldState = localStorage.getItem("total_donations");

      localStorage.setItem(
        "total_donations",
        Number(oldState) + Number(action.payload),
      );
      oldState = localStorage.getItem("total_donations");
      state.userInfo.amountDonated = oldState;
    },
    logout: (state, action) => {
      localStorage.setItem("token", "");
      state.token = "";
      state.userInfo.loggedIn = false;
    },
  },
});

export const {
  setAuth,
  setInfo,
  login,
  logout,
  addAccountType,
  addAccountID,
  addAccountTypeID,
  addDonationAmount,
  addAccountInfo,
} = userSlice.actions;

export default userSlice.reducer;
