import React from "react";
import { ITodo } from "../Models/TodoModel";

const defaultContextTodo: ITodo[] = [];

const updateExitingTodo: ITodo | null = null as any;

export const TodoContext = React.createContext({
  todos: defaultContextTodo,
  updateExitingTodo: updateExitingTodo,
  addTodo: (todo: ITodo) => {},
  deleteTodo: (id: number) => {},
  updateTodo: (id: number, newTodo: string) => {},
  updatedCompletedStateOfTodo: (id: number) => {},
  setUpdateExitingTodo: (todo: ITodo) => {},
  clearUpdateExitingTodo: () => {},
});
