import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import data from "../mockData.json"
export const fetchData = createAsyncThunk("/appData/fetchData", async () => {
  // const rep = await fetch("/src/mockData.json")
  //   .then((response) => response.json())
  //   .catch((error) => console.log("error is", error));
  return data;
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
