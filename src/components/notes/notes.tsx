import "./notes.css";

import { NoteElement, type Note } from "../note";
import { addNote } from "../../store/reducers/notes-slice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { Button } from "../common/button";
import { AppThunk } from "../../store";

interface AllNotesProps {
  noteDetailsEvent: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    note: Note
  ) => void;
}

const Notes = ({ noteDetailsEvent }: AllNotesProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector((state) => state.notes.entities);
  const note: Note = {
    id: 1,
    title: "Thunk Test",
    content: "Exampleeee",
    important: true,
  };

  const addExample = (noteToAdd: Note): AppThunk => {
    return (dispatch, getState) => {
      const stateBefore = getState();
      console.log(`Notes before:`);
      console.log(stateBefore.notes.entities);
      dispatch(addNote(noteToAdd));
      const stateAfter = getState();
      console.log(`Notes after:`);
      console.log(stateAfter.notes.entities);
    };
  };

  return (
    <div className="notes">
      {notes.map((note) => (
        <NoteElement
          key={note.id}
          note={note}
          noteDetailsEvent={noteDetailsEvent}
        />
      ))}
      <Button
        text="Add test note"
        clickEvent={(e) => {
          e.preventDefault();
          dispatch(addExample(note));
        }}
      />
    </div>
  );
};

export default Notes;
