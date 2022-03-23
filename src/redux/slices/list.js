import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import ListService from "../../services/list.service";

const initialState = {
  colorsList: [],
};

export const getList = createAsyncThunk("list/list", async (thunkAPI) => {
  try {
    const data = await ListService.getList();
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue();
  }
});

const listSlice = createSlice({
  name: "list",
  initialState,
  extraReducers: {
    [getList.fulfilled]: (state, action) => {
      const parseInfo = JSON.parse(action.payload);
      state.colorsList = parseInfo?.colors;
    },
  },
});

const { reducer } = listSlice;
export default reducer;
