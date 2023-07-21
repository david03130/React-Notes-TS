import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../components/note";

interface NoteDetailsSliceProps {
  visibility: boolean;
  noteData: Note | undefined;
}

const initialState: NoteDetailsSliceProps = {
  visibility: false,
  noteData: undefined,
};

const noteDetailsSlice = createSlice({
  name: "noteDetails",
  initialState,
  reducers: {
    showNoteDetails(state, action: PayloadAction<Note>) {
      if (action) {
        state.noteData = action.payload;
      }
      state.visibility = true;
    },
    hideNoteDetails(state) {
      state.visibility = false;
      state.noteData = undefined;
    },
  },
});

export const { showNoteDetails, hideNoteDetails } = noteDetailsSlice.actions;

export default noteDetailsSlice.reducer;
