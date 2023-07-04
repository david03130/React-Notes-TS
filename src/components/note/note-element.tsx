import type Note from "./note";
import "./note.css";

const NoteElement = ({ title, content }: Note): JSX.Element => {
  return (
    <div className="note">
      <p className="note__title">{title}</p>
      <p className="note__content">{content}</p>
    </div>
  );
};

export default NoteElement;
