import "./notes.css";

import { useSelector } from "react-redux";
// import { useSelector, UseSelector } from "react-redux/es/hooks/useSelector";
import { NoteElement, type Note } from "../note";
import { noteAdded } from "../../store/reducers/notes-slice";
import { useAppSelector } from "../../hooks/reduxHooks";

interface AllNotesProps {
  noteDetailsEvent: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    note: Note
  ) => void;
}

const Notes = ({ noteDetailsEvent }: AllNotesProps): JSX.Element => {
  const notes = useAppSelector((state) => state.notes.entities);
  return (
    <div className="notes">
      {notes.map((note) => (
        <NoteElement
          key={note.id}
          note={note}
          noteDetailsEvent={noteDetailsEvent}
        />
      ))}
    </div>
  );
};

export default Notes;
