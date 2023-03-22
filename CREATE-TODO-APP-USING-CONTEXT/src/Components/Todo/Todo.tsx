import { useContext } from "react";
import { TodoContext } from "../../Context/Todo-context";
import TodoForm from "./TodoForm/TodoForm";
import TodoItems from "./TodoItems/TodoItems";

const Todo = () => {
  const todoCtx = useContext(TodoContext);
  return (
    <>
      <TodoForm />
      <TodoItems />
    </>
  );
};

export default Todo;
