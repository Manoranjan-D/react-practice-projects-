import { useState } from "react";

import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";
import Card from "../../UI/Card";
import { Todo as TodoModel, ITodo } from "../../Models/TodoModel";

const initialTodos: ITodo[] = [
  {
    id: 10,
    todo: "Learn ReacJs",
    completed: false,
    date: new Date("2023/03/17"),
  },
  {
    id: 20,
    todo: "Organize pantry",
    completed: false,
    date: new Date("2023/03/17"),
  },
  {
    id: 30,
    todo: "Buy a new house decoration",
    completed: false,
    date: new Date("2023/03/17"),
  },
];

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  const [updateTodo, setUpdateTodo] = useState<ITodo | null>(null);

  // CREATE TODO
  const addTodo = (todo: string) => {
    setTodos((prevTodo) => {
      const todoData = TodoModel.fromJSON(todo);
      return [todoData, ...prevTodo];
    });
  };

  // UPDATE TODO
  const UpdateTodo = (id: number, newTodo: string) => {
    setTodos((prevTodo) => {
      const updatedTodo = prevTodo.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            todo: newTodo,
          };
        }
        return todo;
      });
      return updatedTodo;
    });
  };

  //  DELETE TODO
  const deleteTodo = (id: number) => {
    setTodos((prevTodo) => {
      const updatedTodo = prevTodo.filter((todo) => todo.id !== id);
      return updatedTodo;
    });
  };

  //   UPDATE COMPLETED STATE OF TODO
  const updateCompletedState = (id: number) => {
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

  const onUpdateTodo = (todo: ITodo) => {
    setUpdateTodo(todo);
  };

  const onCancelUpdate = () => {
    setUpdateTodo(null);
  };

  const updateTodoHandler = (todo: ITodo) => {
    UpdateTodo(todo.id, todo.todo);
    setUpdateTodo(null);
  };

  return (
    <Card>
      <TodoForm
        addTodo={addTodo}
        updateTodo={updateTodo}
        updateTodoHandler={updateTodoHandler}
        onCancelUpdate={onCancelUpdate}
      />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        updateCompletedState={updateCompletedState}
        onUpdateTodo={onUpdateTodo}
      />
    </Card>
  );
};

export default Todo;
