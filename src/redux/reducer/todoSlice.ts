import { createSlice } from "@reduxjs/toolkit";
import { SliceState } from "../../interface/interface";


const initialState: SliceState = {
  items: {
    "item-1": { id:"item-1", content: "hello" },
    "item-2": { id:"item-2", content: "hallo" },
    "item-3": { id:"item-3", content: "annyeonghaseyo" },
    "item-4": { id:"item-4", content: "hi" },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "title 1",
      itemIds: ["item-1", "item-2"]
    },
    "column-2": {
      id: "column-2",
      title: "title 2",
      itemIds: ["item-3", "item-4"]
    }
  },
  columnOrder: ["column-1", "column-2"],
};
// const initialState: SliceState = {
//   items: {},
//   columns: {},
//   columnOrder: [],
// };

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
