import "./notes.css";

import { NoteElement } from "../note";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { fetchNotes } from "../../store/reducers/notes-slice";
import { useEffect } from "react";
import { showNoteDetails } from "../../store/reducers/note-details-slice";

const Notes = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes);

  // TODO: This gives a warning because of dependencies
  const getApiNotes = () => {
    if (notes.status === "idle") {
      dispatch(fetchNotes());
    } else {
      console.log(
        `Can't fetch Notes data. Notes currently in: ${notes.status}`
      );
    }
  };
  useEffect(getApiNotes, []);

  return (
    <div className="notes">
      {notes.entities
        .filter(
          (note) =>
            (notes.notesToShow === "important" && note.important) ||
            notes.notesToShow === "all"
        )
        .map((note) => (
          <NoteElement
            key={note.id}
            note={note}
            noteDetailsEvent={() => {
              dispatch(showNoteDetails(note));
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
