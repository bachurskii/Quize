import { createSlice } from "@reduxjs/toolkit";
import fetchSessionSliceAsync from "./fetchSessionSliceAsync";

const sessionSlice = createSlice({
  name: "session",
  initialState: {
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSessionSliceAsync.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
  },
});
export default sessionSlice.reducer;
