import { useEffect } from "react";
import { Button, ButtonGroup, Box } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "./Store/Store";
import { fetchAllTodo } from "./Store/todoSlice";
import Todo from "./Components/Todo/Todo";

function App() {
  return (
    <>
      <Todo />
    </>
  );
}

export default App;
