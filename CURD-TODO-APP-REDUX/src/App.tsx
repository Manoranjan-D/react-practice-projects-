import { useSelector } from "react-redux";
import { RootState } from "./Store/store";

import Todo from "./Todo/Todo";

function App() {
  const todos = useSelector((state: RootState) => state.todos);

  return (
    <>
      <Todo />
    </>
  );
}

export default App;
