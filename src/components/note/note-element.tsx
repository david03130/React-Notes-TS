import React from "react";
import type Note from "./note";
import "./note.css";

interface NoteElementProps {
  note: Note;
  noteDetailsEvent: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    note: Note
  ) => void;
}

const NoteElement = ({
  note,
  noteDetailsEvent,
}: NoteElementProps): JSX.Element => {
  const clickEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    noteDetailsEvent(e, note);
  };

  return (
    <div className="note" onClick={clickEvent}>
      <p className="note__title">{note.title}</p>
      <p className="note__content">{note.content}</p>
    </div>
  );
};

export default NoteElement;
