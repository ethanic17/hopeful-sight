import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: true,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = appSlice.actions;

export default appSlice.reducer;
