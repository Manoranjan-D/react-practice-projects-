import React, { ChangeEvent, ChangeEventHandler } from "react";
import { ITodo } from "../../../Models/TodoModel";
import Card from "../../../UI/Card";

const TodoList: React.FC<{
  todos: ITodo[];
  deleteTodo: (id: number) => void;
  updateCompletedState: (id: number) => void;
  onUpdateTodo: (todo: ITodo) => void;
}> = ({ todos, deleteTodo, updateCompletedState, onUpdateTodo }) => {
  return (
    <>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <Card>
              <input
                type="checkbox"
                name="todoStatus"
                onChange={(e) => updateCompletedState(todo.id)}
              />
              <div>
                {todo.completed ? <s>{todo.todo}</s> : <p>{todo.todo}</p>}
                {todo.date.toLocaleDateString()}
              </div>

              <button type="button" onClick={(e) => deleteTodo(todo.id)}>
                Delete
              </button>
              <button
                type="button"
                onClick={(e) => onUpdateTodo(todo)}
                disabled={todo.completed}
              >
                Update
              </button>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
