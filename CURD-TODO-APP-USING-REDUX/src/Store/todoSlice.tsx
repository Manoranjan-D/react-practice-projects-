import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../Model/TodoModel";

const initialTodo: ITodo[] = [
  {
    id: 1,
    todo: "Learn react-redux",
    completed: false,
    date: new Date("01/01/2022"),
  },
  {
    id: 2,
    todo: "Build TODO app using react-redux",
    completed: false,
    date: new Date("01/01/2022"),
  },
];

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialTodo,
  reducers: {
    addTodo: (state, action: PayloadAction<{ todo: ITodo }>) => {
      state.push(action.payload.todo);
    },

    deleteTodo: (state, action: PayloadAction<{ id: number }>) => {
      const updatedTodo = state.filter((todo) => todo.id !== action.payload.id);
      return updatedTodo;
    },

    updateTodo: (
      state,
      action: PayloadAction<{ id: number; todo: string }>
    ) => {
      const updatedTodo = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, todo: action.payload.todo };
        }
        return todo;
      });

      return updatedTodo;
    },

    updateCompletedStateOfTodo: (
      state,
      action: PayloadAction<{ id: number }>
    ) => {
      const updatedTodo = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return updatedTodo;
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, updateCompletedStateOfTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
