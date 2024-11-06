import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  userInfo: {
    loggedIn: false,
    name: null,
    username: null,
    email: null,
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
      state.userInfo.accountType = action.payload;
    },
  },
});

export const { setAuth, setInfo, login, addAccountType } = userSlice.actions;

export default userSlice.reducer;
