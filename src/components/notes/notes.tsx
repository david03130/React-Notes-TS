import "./notes.css";

import React from "react";
import { NoteElement, type Note } from "../note";

interface AllNotesProps {
  notes: Note[];
}

const Notes = ({ notes }: AllNotesProps): JSX.Element => {
  return (
    <div className="notes">
      {notes.map((note) => (
        <NoteElement
          key={crypto.randomUUID()}
          title={note.title}
          content={note.content}
          important={note.important}
        />
      ))}
    </div>
  );
};

export default Notes;
