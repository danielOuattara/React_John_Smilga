import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TypeRootState = ReturnType<typeof store.getState>;

// Inferred type: {friends: friendsSate, posts: PostsState, comments: CommentsState, users: UsersState}
export type TypeAppDispatch = typeof store.dispatch;

export default store;
