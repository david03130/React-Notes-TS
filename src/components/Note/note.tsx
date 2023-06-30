import "./note.css";

interface NoteProps {
  title: string;
  content: string;
  important: boolean;
}

const Note = ({ title, content, important }: NoteProps): JSX.Element => {
  return (
    <div className="note">
      <p className="note__title">{title}</p>
      <p className="note__content">{content}</p>
    </div>
  );
};

export default Note;
