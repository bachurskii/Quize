import { createAsyncThunk } from "@reduxjs/toolkit";
const fetchSessionSliceAsync = createAsyncThunk(
  "session/fetchUser",
  async (formData) => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
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
const fetchSessionSliceSignUp = createAsyncThunk(
  "session/fetchUser",
  async (formData) => {
    try {
      const response = await fetch("http://localhost:8000/api/auth/signUp", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
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

export { fetchSessionSliceAsync, fetchSessionSliceSignUp };
