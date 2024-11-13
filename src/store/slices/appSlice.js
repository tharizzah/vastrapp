import { createSlice } from "@reduxjs/toolkit";
import { joinEmailList } from "../thunks/joinEmailList";

const appSlice = createSlice({
  name: "app",
  initialState: {
    token: null,
    isLoadingJoinEmailList: false,
    errorLoadingJoinEmailList: null,
  },
  reducers: {
    changeToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(joinEmailList.pending, (state, action) => {
      state.isLoadingJoinEmailList = true;
    });
    builder.addCase(joinEmailList.fulfilled, (state, action) => {
      state.isLoadingJoinEmailList = false;
    });
    builder.addCase(joinEmailList.rejected, (state, action) => {
      state.isLoadingJoinEmailList = false;
      state.errorLoadingJoinEmailList = action.error;
    });
  },
});

export const { changeToken } = appSlice.actions;
export const appReducer = appSlice.reducer;
