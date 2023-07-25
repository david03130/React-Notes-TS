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
  const clickEvent = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    noteDetailsEvent(e, note);
  };

  return (
    <div className="note" onClick={clickEvent}>
      <div className="note__header">
        <p className="note__header__title">{note.title}</p>
        {note.important ? (
          <FontAwesomeIcon
            className="note__header__important"
            icon={faExclamation}
          />
        ) : (
          ""
        )}
      </div>
      <p className="note__content">{note.content}</p>
    </div>
  );
};

export default NoteElement;
