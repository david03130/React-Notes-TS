import "./note-form.css";
import { Modal } from "../common/modal";
import { useState } from "react";
import { Note } from "../note";

interface NoteFormProps {
  modalVisibility: boolean;
  handleClose: React.MouseEventHandler;
}

const defaultNote: Note = {
  id: 0,
  title: "",
  content: "",
  important: false,
};

const NoteForm = ({
  modalVisibility,
  handleClose,
}: NoteFormProps): JSX.Element => {
  const [newNote, setNewNote] = useState<Note>(defaultNote);

  const handleNoteSave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Save note!");
    // handleClose(e);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewNote({ ...newNote, title: e.target.value });
  };

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewNote({ ...newNote, content: e.target.value });
  };

  return (
    <Modal
      modalTitle="Add new note"
      isOpen={modalVisibility}
      handleClose={handleClose}
      handleSave={handleNoteSave}
    >
      <div className="noteForm">
        <div className="note-input-area note__text-input">
          <h6>Title</h6>
          <input
            type="text"
            value={newNote.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="note-input-area note__textarea">
          <h6>Content</h6>
          <textarea value={newNote.content} onChange={handleContentChange} />
        </div>
      </div>
    </Modal>
  );
};

export default NoteForm;
