import "./note-form.css";
import { Modal } from "../common/modal";
import { useState } from "react";
import { Note } from "../note";
import NoteCalls from "../../services/note-calls";
import { ModalActionButton } from "../common/modal";

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
    NoteCalls.create(newNote)
      .then(() => {
        console.log("Note saved!");
        handleClose(e);
      })
      .catch(() => {
        throw new Error("Error when saving note1");
      });
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setNewNote({ ...newNote, title: e.target.value });
  };

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setNewNote({ ...newNote, content: e.target.value });
  };

  const handleImportanceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setNewNote({ ...newNote, important: e.target.checked });
  };

  const modalSaveButton: ModalActionButton = {
    position: 1,
    text: "Save",
    clickEvent: handleNoteSave,
  };

  return (
    <Modal
      modalTitle="Add new note"
      isOpen={modalVisibility}
      handleClose={handleClose}
      modalButtons={[modalSaveButton]}
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
        <div className="note-input-area note__important-checkbox">
          <input
            type="checkbox"
            checked={newNote.important}
            onChange={handleImportanceChange}
          />
          <h6>Important</h6>
        </div>
      </div>
    </Modal>
  );
};

export default NoteForm;
