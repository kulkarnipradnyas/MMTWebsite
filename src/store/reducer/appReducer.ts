import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedOption: "HOME",
};

const slice = createSlice({
  name: "venue",
  initialState,
  reducers: {
    reset: () => initialState,
    setOption: (state, { payload }) => ({
      ...state,
      selectedOption: payload,
    }),
  },
});

export const { reset, setOption } = slice.actions;
export default slice.reducer;
