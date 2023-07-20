import "./notes.css";

import { NoteElement } from "../note";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchNotes } from "../../store/reducers/notes-slice";
import { useEffect } from "react";
import { showNoteForm } from "../../store/reducers/note-form-slice";

const Notes = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const status = useAppSelector((state) => state.notes.status);
  const notes = useAppSelector((state) => state.notes.entities);

  const getApiNotes = () => {
    if (status === "idle") {
      dispatch(fetchNotes());
    } else {
      console.log(`Can't fetch Notes data. Notes currently in: ${status}`);
    }
  };
  useEffect(getApiNotes, []);

  return (
    <div className="notes">
      {notes.map((note) => (
        <NoteElement
          key={note.id}
          note={note}
          noteDetailsEvent={() => {
            dispatch(showNoteForm(note));
          }}
        />
      ))}
    </div>
  );
};

export default Notes;

// const addExample = (noteToAdd: Note): AppThunk => {
//   return (dispatch, getState) => {
//     const stateBefore = getState();
//     console.log(`Notes before:`);
//     console.log(stateBefore.notes.entities);
//     dispatch(addNote(noteToAdd));
//     const stateAfter = getState();
//     console.log(`Notes after:`);
//     console.log(stateAfter.notes.entities);
//   };
// };
