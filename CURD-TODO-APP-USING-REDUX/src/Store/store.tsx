import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Store/todoSlice";
import updateReducer from "../Store/updateTodoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
    updateTodo: updateReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
