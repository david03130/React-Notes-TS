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
  name: "",
  initialState,
  reducers: {
    noteAdded(state, action) {
      state.entities.push(action.payload);
    },
  },
});

export default notesSlice.reducer;
