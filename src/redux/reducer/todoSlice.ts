import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
  name: "todolist",
  initialState: {
    todos: [],
  },
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = TodoSlice.actions;

export default TodoSlice.reducer;
