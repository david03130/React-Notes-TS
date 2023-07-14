import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../components/note";
import ApiStatus from "../api-status";

interface NoteReducer {
  entities: Note[];
  status: ApiStatus;
}

const initialState: NoteReducer = {
  entities: [{ id: 1, title: "Test", content: "holaaa", important: true }],
  status: null,
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    noteAdded(state, action) {
      state.entities.push(action.payload);
    },
  },
});

export const { noteAdded } = notesSlice.actions;

export default notesSlice.reducer;
