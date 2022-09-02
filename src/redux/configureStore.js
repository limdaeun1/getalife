import { configureStore } from "@reduxjs/toolkit";
import post from "./modules/postSlice";
import comment from "./modules/commentSlice";


const store = configureStore({
  reducer: {
		post,
    comment,
  },
});

export default store;