import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // addNumber: (state, action) => {
    //   state.number = state.number + action.payload;
    // },

    // minusNumber: (state, action) => {
    //   state.number = state.number - action.payload;
    // },
  },
});

export const {  } = commentSlice.actions;
export default commentSlice.reducer;