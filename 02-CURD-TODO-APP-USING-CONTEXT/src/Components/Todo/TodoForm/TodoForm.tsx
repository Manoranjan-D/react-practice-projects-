import { FormEvent, useContext, useEffect, useState } from "react";

import { TodoContext } from "../../../Context/Todo-context";
import { ITodo, Todo } from "../../../Models/TodoModel";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [newUpdateTodo, setnewUpdateTodo] = useState<ITodo | null>(null);
  const { addTodo, updateExitingTodo, updateTodo, clearUpdateExitingTodo } =
    useContext(TodoContext);

  useEffect(() => {
    setnewUpdateTodo(updateExitingTodo);
  }, [updateExitingTodo]);

  const addTodoHandler = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    if (!newTodo.trim().length) return;
    const todoDetails = Todo.fromJSON(newTodo);
    addTodo(todoDetails);
    setNewTodo("");
  };

  const updateTodoHandler = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    updateTodo(newUpdateTodo!.id, newUpdateTodo!.todo);
  };

  return (
    <>
      {!newUpdateTodo ? (
        <form onSubmit={addTodoHandler}>
          <input
            type="text"
            placeholder="ADD TODO"
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setNewTodo(e.currentTarget.value)
            }
            value={newTodo}
          />
          <button type="submit">Add</button>
        </form>
      ) : (
        <form onSubmit={updateTodoHandler}>
          <input
            type="text"
            value={newUpdateTodo ? newUpdateTodo.todo : ""}
            onChange={(e: FormEvent<HTMLInputElement>) =>
              setnewUpdateTodo({
                id: newUpdateTodo!.id,
                todo: e.currentTarget.value,
                completed: newUpdateTodo!.completed,
                date: newUpdateTodo!.date,
              })
            }
          />
          <button type="submit">Update</button>
          <button type="button" onClick={clearUpdateExitingTodo}>
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default TodoForm;
