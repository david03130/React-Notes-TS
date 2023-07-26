import "./note-element.css";

import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import type Note from "./note";

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
  const maxLength = 180;
  
  const clickEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    noteDetailsEvent(e, note);
  };

  return (
    <div className="note" onClick={clickEvent}>
      <div className="note__header">
        <h2 className="note__header__title">{note.title}</h2>
        {note.important ? (
          <FontAwesomeIcon
            className="note__header__important"
            icon={faExclamation}
          />
        ) : (
          ""
        )}
      </div>
      <p className="note__content">
        {note.content.length > maxLength
          ? note.content.substring(0, maxLength) + "..."
          : note.content}
      </p>
    </div>
  );
};

export default NoteElement;
