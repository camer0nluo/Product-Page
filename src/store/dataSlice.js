import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("/appData/fetchData", async () => {
  const rep = await fetch("/mockData.json")
    .then((response) => response.json())
    .catch((error) => console.log("error is", error));
  return rep;
});

const initialState = {
  status: null,
  dataOb: [],
};

export const dataSlice = createSlice({
  name: "appData",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      state.dataOb = action.payload;
      state.status = "Fulfilled";
    },
  },
});

export default dataSlice.reducer;
