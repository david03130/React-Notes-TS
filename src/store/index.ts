import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notes-slice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Documentation says last generic argument should be UnknownAction, but can't import it from "redux".
// https://redux.js.org/usage/usage-with-typescript#type-checking-redux-thunks
export type AppThunk<Returntype = void> = ThunkAction<
  Returntype,
  RootState,
  unknown,
  Action<unknown>
>;

export default store;
