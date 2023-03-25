import { useContext } from "react";
import { TodoContext } from "../../../Context/Todo-context";

const TodoItems = () => {
  const {
    todos,
    deleteTodo,
    updatedCompletedStateOfTodo,
    setUpdateExitingTodo,
  } = useContext(TodoContext);
  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <div>
                <input
                  type="checkbox"
                  value={todo.id}
                  onChange={() => updatedCompletedStateOfTodo(todo.id)}
                />
                <div>
                  {todo.completed ? <s> {todo.todo}</s> : <p> {todo.todo}</p>}

                  {todo.date.toLocaleDateString()}
                </div>
              </div>
              <input
                type="button"
                value="Update"
                onClick={() => setUpdateExitingTodo(todo)}
              />
              <input
                type="button"
                value="Delete"
                onClick={() => deleteTodo(todo.id)}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};
export default TodoItems;
