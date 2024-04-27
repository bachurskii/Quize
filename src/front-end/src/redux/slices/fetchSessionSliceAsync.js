import { createAsyncThunk } from "@reduxjs/toolkit";
const fetchSessionSliceAsync = createAsyncThunk(
  "session/fetchUser",
  async () => {
    try {
      const response = await fetch("");
      if (!response.ok) {
        throw new Error("Something wrong");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      return `${error}`;
    }
  }
);

export default fetchSessionSliceAsync;
