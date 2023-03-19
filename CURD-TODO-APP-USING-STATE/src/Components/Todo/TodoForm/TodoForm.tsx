import React, { FormEvent, useEffect, useRef, useState } from "react";
import Card from "../../../UI/Card";
import { ITodo } from "../../../Models/TodoModel";

const TodoForm: React.FC<{
  addTodo: (todo: string) => void;
  updateTodoHandler: (todo: ITodo) => void;
  onCancelUpdate: () => void;
  updateTodo: ITodo | null;
}> = ({ addTodo, updateTodo, updateTodoHandler, onCancelUpdate }) => {
  const todoInputRef = useRef<HTMLInputElement>(null);
  const [updateTodoState, setUpdateTodoState] = useState<ITodo | null>(null);

  useEffect(() => {
    setUpdateTodoState(updateTodo);
  }, [updateTodo]);

  const addTodoHandler = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    if (todoInputRef.current?.value.trim().length)
      addTodo(todoInputRef.current!.value);
    todoInputRef.current!.value = "";
  };

  const setNewTodo = (e: FormEvent<HTMLInputElement>) => {
    const newTodo: ITodo = {
      id: updateTodoState!.id,
      todo: e.currentTarget.value,
      completed: updateTodoState!.completed,
      date: updateTodoState!.date,
    };
    setUpdateTodoState(newTodo);
  };

  const onUpdateTodo = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    updateTodoHandler(updateTodoState!);
  };

  return (
    <>
      {updateTodoState ? (
        <Card>
          <form onSubmit={onUpdateTodo}>
            <input
              type="text"
              id="updateTodo"
              onChange={setNewTodo}
              value={updateTodoState.todo}
            />
            <button type="submit">update</button>
            <button type="button" onClick={() => onCancelUpdate()}>
              cancel
            </button>
          </form>
        </Card>
      ) : (
        <Card>
          <form onSubmit={addTodoHandler}>
            <input type="text" id="addTodo" ref={todoInputRef} />
            <button type="submit">Add</button>
          </form>
        </Card>
      )}
    </>
  );
};

export default TodoForm;
