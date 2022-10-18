import { createSlice } from "@reduxjs/toolkit";
import { SliceState } from "../../interface/interface";

const initialState: SliceState = {
  items: [],
  columns: {},
  columnOrder: [],
};

export const TodoSlice = createSlice({
  name: "todolist",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setColumns: (state, action) => {
      state.columns = action.payload;
    },
    setColumnOrder: (state, action) => {
      state.columnOrder = action.payload;
    },
  },
});

export const { setItems, setColumns, setColumnOrder } = TodoSlice.actions;

export default TodoSlice.reducer;
