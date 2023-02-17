import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOption: "HOME",
  isDarkTheme: true,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    reset: () => initialState,
    setOption: (state, { payload }) => ({
      ...state,
      selectedOption: payload,
    }),
    changeTheme: (state, { payload }) => ({
      ...state,
      isDarkTheme: payload,
    }),
  },
});

export const { reset, setOption, changeTheme } = slice.actions;
export default slice.reducer;
