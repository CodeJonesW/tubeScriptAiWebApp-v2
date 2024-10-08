import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getGoal = createAsyncThunk(
  "goal/getGoal",
  async ({ token, goalId }) => {
    const response = await axios.post(
      `/api/goal`,
      {
        goalId,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  }
);

const goalSlice = createSlice({
  name: "goal",
  initialState: {
    goal: null,
    loading: false,
    error: false,
  },
  reducers: {
    clearGoal: (state) => {
      state.goal = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getGoal.pending, (state) => {
        state.loading = true;
      })
      .addCase(getGoal.fulfilled, (state, action) => {
        state.goal = action.payload.goal;
      })
      .addCase(getGoal.rejected, (state, action) => {
        state.error = true;
      });
  },
});

export const { clearGoal } = goalSlice.actions;

export default goalSlice;
