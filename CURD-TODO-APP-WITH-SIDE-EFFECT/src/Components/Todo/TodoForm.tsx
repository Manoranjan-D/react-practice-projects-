import { FormControl, Input, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateExitingTodo } from "../../Store/todoSlice";
import React, { useState } from "react";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";

const TodoForm = () => {
  const [newTodo, setnewTodo] = useState<string>("");
  const [updateTodo, setUpdateTodo] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();

  const todoTobeUpdated = useSelector(
    (state: RootState) => state.todos.todoTobeUpdated
  );

  useEffect(() => {
    setUpdateTodo(todoTobeUpdated ? todoTobeUpdated.todo : "");
  }, [todoTobeUpdated]);

  const addTodoHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(addTodo({ todo: newTodo, completed: false, userId: 1 }));
  };

  const updateTodoHandler = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    dispatch(updateExitingTodo({ id: todoTobeUpdated!.id, todo: updateTodo }));
  };

  return (
    <>
      <form onSubmit={updateTodoHandler}>
        <Input
          type="text"
          value={updateTodo}
          onChange={(e: React.FocusEvent<HTMLInputElement>) =>
            setUpdateTodo(e.currentTarget.value)
          }
        />
        <Button colorScheme="blue" type="submit">
          Update
        </Button>
        <Button colorScheme="red" type="button">
          Cancel
        </Button>
      </form>

      <form onSubmit={addTodoHandler}>
        <Input
          type="text"
          value={newTodo}
          onChange={(e: React.FocusEvent<HTMLInputElement>) =>
            setnewTodo(e.currentTarget.value)
          }
        />
        <Button colorScheme="blue" type="submit">
          Add
        </Button>
      </form>
    </>
  );
};

export default TodoForm;
