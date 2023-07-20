import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../components/note";

interface NoteFormSliceProps {
  visibility: boolean;
  noteData: Note | undefined;
}

const initialState: NoteFormSliceProps = {
  visibility: false,
  noteData: undefined,
};

const noteFormSlice = createSlice({
  name: "noteForm",
  initialState,
  reducers: {
    changeNote(state, action: PayloadAction<Note>) {
      // This change should be immutable since Immer is in use.
      state.noteData = action.payload;
    },
    showNoteForm(state, action: PayloadAction<Note | undefined>) {
      if (action) {
        state.noteData = action.payload;
      }
      state.visibility = true;
    },
    hideNoteForm(state) {
      state.visibility = false;
    },
  },
});

export const { changeNote, hideNoteForm, showNoteForm } = noteFormSlice.actions;

export default noteFormSlice.reducer;
