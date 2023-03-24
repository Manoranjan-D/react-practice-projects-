import { createSlice } from "@reduxjs/toolkit";
import { ITodo } from "../Model/TodoModel";

import type { PayloadAction } from "@reduxjs/toolkit";

const initalUpdateTodo: ITodo | null = null as any;

const updateTodoSlice = createSlice({
  name: "updateTodo",
  initialState: initalUpdateTodo,
  reducers: {
    addUpdate: (state, action: PayloadAction<{ todo: ITodo }>) => {
      return action.payload.todo;
    },
    cancelUpdate: (state) => {
      return null;
    },
  },
});

export const { addUpdate, cancelUpdate } = updateTodoSlice.actions;

export default updateTodoSlice.reducer;
