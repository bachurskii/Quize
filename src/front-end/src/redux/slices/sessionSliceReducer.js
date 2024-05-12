import { createSlice } from "@reduxjs/toolkit";
import {
  fetchSessionSliceAsync,
  fetchSessionSliceSignUp,
} from "./fetchSessionSliceAsync";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(fetchSessionSliceAsync.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // });
    // builder.addCase(fetchSessionSliceAsync.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(fetchSessionSliceAsync.rejected, (state) => {
    //   state.isLoading = false;
    //   state.error = true;
    // });
    builder.addCase(fetchSessionSliceSignUp.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchSessionSliceSignUp.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(fetchSessionSliceSignUp.rejected, (state) => {
      state.isLoading = false;
      state.error = true;
    });
  },
});
export default sessionSlice.reducer;
