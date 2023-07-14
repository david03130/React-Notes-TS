import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "./reducers/notes-slice";

const store = configureStore({
  reducer: {
    notes: notesReducer,
  },
});
