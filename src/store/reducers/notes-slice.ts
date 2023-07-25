import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note } from "../../components/note";
import ResultData from "../api-result-data";
import NoteCalls from "../../services/note-calls";

export type NotesToShow = "all" | "important";

interface NotesResult extends ResultData<Note> {
  notesToShow: NotesToShow;
}

const initialState: NotesResult = {
  entities: [],
  status: "idle",
  error: null,
  notesToShow: "all",
};

const notesSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: {
      reducer(state, action: PayloadAction<Note, string>) {
        state.entities.push(action.payload);
      },
      prepare(note: Note) {
        const payload = {
          payload: note,
        };
        return payload;
      },
    },
    setNotesToShow(state, action: PayloadAction<NotesToShow>) {
      state.notesToShow = action.payload;
    },
    // simpleAddNote(state, action: PayloadAction<Note, string>) {
    //   state.entities.push(action.payload);
    // },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNotes.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchNotes.fulfilled, (state, action) => {
        state.status = "complete";
        // Add any fetched notes to the array
        state.entities = action.payload;
      })
      .addCase(fetchNotes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? null;
      });
  },
});

// Cuidado con referencia circular.
export const fetchNotes = createAsyncThunk("notes/fetchNotes", async () => {
  const response = await NoteCalls.getAll();
  return response.data;
});

export const { addNote, setNotesToShow } = notesSlice.actions;

export default notesSlice.reducer;
