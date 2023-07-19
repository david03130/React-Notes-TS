import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../components/note";

interface NoteFormSliceProps {
  visibility: boolean;
  noteData: Note | undefined;
}

const initialState: NoteFormSliceProps = {
  visibility: true,
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
    hideNote(state) {
      state.visibility = false;
    },
  },
});

export const { changeNote, hideNote } = noteFormSlice.actions;

export default noteFormSlice.reducer;
