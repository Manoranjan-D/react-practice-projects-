import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../Store/todoSlice";
import { cancelUpdate } from "../../Store/updateTodoSlice";
import { updateTodo } from "../../Store/todoSlice";
import { ITodo, Todo } from "../../Model/TodoModel";
import { RootState } from "../../Store/store";

const TodoForm = () => {
  const [newTodo, setNewTodo] = useState<string>("");
  const [UpdateTodo, setUpdateTodo] = useState<string>("");

  const dispatcher = useDispatch();

  const existingUpdateTodo = useSelector((state: RootState) => {
    return state.updateTodo;
  });

  useEffect(() => {
    setUpdateTodo(existingUpdateTodo ? existingUpdateTodo.todo : "");
  }, [existingUpdateTodo]);

  const addTodoHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const todoDetails = Todo.fromJson(newTodo);
    dispatcher(addTodo({ todo: todoDetails }));
    setNewTodo("");
  };

  const updateTodoHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatcher(updateTodo({ id: existingUpdateTodo!.id, todo: UpdateTodo }));
    dispatcher(cancelUpdate());
  };

  return (
    <>
      {!existingUpdateTodo ? (
        <form onSubmit={addTodoHandler}>
          <input
            type="text"
            placeholder="ADD TODO"
            value={newTodo}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setNewTodo(e.currentTarget.value)
            }
          />
          <button type="submit">Add Todo</button>
        </form>
      ) : (
        <form onSubmit={updateTodoHandler}>
          <input
            type="text"
            placeholder="Update TODO"
            value={UpdateTodo}
            onChange={(e: React.FormEvent<HTMLInputElement>) =>
              setUpdateTodo(e.currentTarget.value)
            }
          />
          <button type="submit">Update</button>
          <button type="button" onClick={() => dispatcher(cancelUpdate())}>
            Cancel
          </button>
        </form>
      )}
    </>
  );
};

export default TodoForm;
