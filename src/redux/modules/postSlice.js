import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
};

export const postSlice = createSlice({
  name: "post",
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

export const {  } = postSlice.actions;
export default postSlice.reducer;