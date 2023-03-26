import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { ITodo } from "../Model/todoModel";

interface todoStore {
  todos: ITodo[];
  todoTobeUpdated: ITodo | null;
  loading: boolean;
}

const initialTodoStore: todoStore = {
  todos: [],
  todoTobeUpdated: null,
  loading: false,
};

const todoSlice = createSlice({
  name: "todos",
  initialState: initialTodoStore,
  reducers: {
    notifyUpdated: (state, action: PayloadAction<{ todo: ITodo }>) => {
      state.todoTobeUpdated = action.payload.todo;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchAllTodo.fulfilled, (state, action) => {
      state.todos = action.payload.todos;
    });
    builder.addCase(addTodo.fulfilled, (state, action) => {
      state.todos.push(action.payload);
    });
    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    });
    builder.addCase(updateExitingTodo.fulfilled, (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      });
    });
  },
});

// HTTP REQUEST
export const fetchAllTodo = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch("https://dummyjson.com/todos/user/1");
  return response.json();
});

export const addTodo = createAsyncThunk(
  "todos/addTodo",
  async ({
    todo,
    completed,
    userId,
  }: {
    todo: string;
    completed: boolean;
    userId: number;
  }) => {
    const response = await fetch("https://dummyjson.com/todos/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ todo, completed, userId }),
    });
    return response.json();
  }
);

export const deleteTodo = createAsyncThunk(
  "todos/deleteTodo",
  async ({ id }: { id: number }) => {
    const response = await fetch(
      `https://dummyjson.com/todos/${id.toString()}`,
      {
        method: "DELETE",
      }
    );

    return response.json();
  }
);

export const updateExitingTodo = createAsyncThunk(
  "todos/updateTodo",
  async ({ id, todo }: { id: number; todo: string }) => {
    const response = await fetch(
      `https://dummyjson.com/todos/${id.toString()}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ todo: todo }),
      }
    );
    return response.json();
  }
);

export const { notifyUpdated } = todoSlice.actions;
export default todoSlice.reducer;
