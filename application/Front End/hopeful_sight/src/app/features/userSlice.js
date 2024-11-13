import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userInfo: {
    loggedIn: false,
    username: null,
    email: null,
    donator: false,
    account: {},
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
    login: (state, action) => {
      state.userInfo.loggedIn = true;
      state.userInfo.id = action.payload.id;
      state.userInfo.username = action.payload.username;
      state.userInfo.email = action.payload.email;
      state.userInfo.account = action.payload.account;
      if (state.userInfo.account.donatee.has_applied_for_account) {
        state.userInfo.donator = false;
      } else {
        state.userInfo.donator = true;
      }
    },
    editAccount: (state, action) => {
      state.userInfo.account = action.payload;
    },
  },
});

export const { setAuth, login, editAccount } = userSlice.actions;

export default userSlice.reducer;
