import { useSelector, useDispatch } from "react-redux";
import { ITodo } from "../../Model/TodoModel";
import { RootState } from "../../Store/store";
import { deleteTodo, updateCompletedStateOfTodo } from "../../Store/todoSlice";
import { addUpdate } from "../../Store/updateTodoSlice";

const TodoList = () => {
  const todos: ITodo[] = useSelector((state: RootState) => state.todos);

  const dispatch = useDispatch();

  return (
    <>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                onClick={() =>
                  dispatch(updateCompletedStateOfTodo({ id: todo.id }))
                }
              />
              {todo.completed ? <s>{todo.todo}</s> : <p>{todo.todo}</p>}

              <p>{todo.date.toLocaleDateString()}</p>
              <button
                type="button"
                onClick={() => dispatch(addUpdate({ todo: todo }))}
              >
                Update
              </button>
              <button
                type="button"
                onClick={() => dispatch(deleteTodo({ id: todo.id }))}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TodoList;
