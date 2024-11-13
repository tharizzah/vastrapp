import { createSelector } from "@reduxjs/toolkit";

export const selectToken = createSelector(
    (state) => state.app.token,
    (token) => token
  );