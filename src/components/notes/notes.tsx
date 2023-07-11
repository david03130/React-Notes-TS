import "./notes.css";

import { NoteElement, type Note } from "../note";

interface AllNotesProps {
  notes: Note[];
  noteDetailsEvent: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    note: Note
  ) => void;
}

const Notes = ({ notes, noteDetailsEvent }: AllNotesProps): JSX.Element => {
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
