import { PropsWithChildren, useState } from "react";

import { ITodo } from "../Models/TodoModel";
import { TodoContext } from "./Todo-context";

const initialTodo: ITodo[] = [
  {
    id: 100,
    todo: "Learn React Context API",
    completed: false,
    date: new Date("01/01/2020"),
  },
  {
    id: 200,
    todo: "Build TODO App",
    completed: false,
    date: new Date("01/01/2020"),
  },
];

const TodoContextWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodo);
  const [newUpdateTodo, setnewUpdateTodo] = useState<ITodo | null>(null);

  const addTodo = (todo: ITodo) => {
    setTodos((prevTodo) => {
      return [todo, ...prevTodo];
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodo) => {
      const updatedTodo = prevTodo.filter((todo) => todo.id !== id);
      return updatedTodo;
    });
  };

  const updateTodo = (id: number, newTodo: string) => {
    setTodos((prevTodo) => {
      const updatedTodo = prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todo: newTodo };
        }
        return todo;
      });
      return updatedTodo;
    });

    clearUpdateExitingTodo();
  };

  const updatedCompletedStateOfTodo = (id: number) => {
    setTodos((prevTodo) => {
      const updatedTodo = prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
      return updatedTodo;
    });
  };

  const setUpdateExitingTodo = (todo: ITodo) => {
    setnewUpdateTodo(todo);
  };

  const clearUpdateExitingTodo = () => {
    setnewUpdateTodo(null);
  };

  return (
    <TodoContext.Provider
      value={{
        todos: todos,
        updateExitingTodo: newUpdateTodo,
        addTodo: addTodo,
        deleteTodo: deleteTodo,
        updateTodo: updateTodo,
        updatedCompletedStateOfTodo: updatedCompletedStateOfTodo,
        setUpdateExitingTodo: setUpdateExitingTodo,
        clearUpdateExitingTodo: clearUpdateExitingTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextWrapper;
