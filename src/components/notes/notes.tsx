import "./notes.css";

import { NoteElement, type Note } from "../note";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Button } from "../common/button";
import { AppThunk } from "../../store";
import { fetchNotes } from "../../store/reducers/notes-slice";
import { useEffect } from "react";

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

  return (
    <div className="notes">
      {notes.map((note) => (
        <NoteElement
          key={note.id}
          note={note}
          noteDetailsEvent={() => {
            console.log("Note details has to be implemented.");
          }}
        />
      ))}
      {/* <Button
        text="Add test note"
        clickEvent={(e) => {
          e.preventDefault();
          dispatch(addNote(note));
        }}
      /> */}
    </div>
  );
};

export default Notes;
