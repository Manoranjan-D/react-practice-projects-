import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../Store/Store";
import { useEffect } from "react";
import { fetchAllTodo } from "../../Store/todoSlice";
import { Box } from "@chakra-ui/react";

import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ITodo } from "../../Model/todoModel";

const Todo = () => {
  const dispatch = useDispatch<AppDispatch>();
  const todos: ITodo[] = useSelector((state: RootState) => state.todos.todos);

  useEffect(() => {
    dispatch(fetchAllTodo());
  }, []);

  return (
    <>
      <Box m={4}>Todo using Side Effects</Box>
      <h1></h1>
      <TodoForm />
      <TodoList todos={todos} />
    </>
  );
};

export default Todo;
