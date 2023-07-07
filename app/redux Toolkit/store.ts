import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/CounterSlice";
import answerCollectorSlice from "./slice/AnswerCollectorSlice";
import { enableMapSet } from "immer";
enableMapSet();

export const store = configureStore({
	reducer: {
		answerCollector: answerCollectorSlice.reducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
