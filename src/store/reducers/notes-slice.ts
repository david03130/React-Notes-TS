import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../components/note";
import ApiStatus from "../api-status";

interface NoteReducer {
  entities: Note[];
  status: ApiStatus;
}

const initialState: NoteReducer = {
  entities: [],
  status: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote(state, action) {
      state.entities.push(action.payload);
    }
  },
});

export const { addNote } = notesSlice.actions;

export default notesSlice.reducer;
