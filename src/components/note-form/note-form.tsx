import "./note-form.css";
import { Modal } from "../common/modal";
import { useEffect, useState } from "react";
import { Note } from "../note";
import NoteCalls from "../../services/note-calls";
import { ModalActionButton } from "../common/modal";

interface NoteFormProps {
  modalVisibility: boolean;
  handleClose: React.MouseEventHandler;
  noteData?: Note;
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
  noteData,
}: NoteFormProps): JSX.Element => {
  const [currentNote, setCurrentNote] = useState<Note>(defaultNote);
  const isExistingNote = currentNote.id ? true : false;

  useEffect(() => {
    setCurrentNote(noteData ?? defaultNote);
  }, [noteData]);

  const handleNoteUpdate = () => {
    console.log("Time to implement update!");
  };

  const handleNoteSave = () => {
    NoteCalls.create(currentNote)
      .then(() => {
        console.log("Note saved!");
      })
      .catch(() => {
        throw new Error("Error when saving note!");
      });
  };

  const handleSaveButton = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isExistingNote) {
      handleNoteUpdate();
    } else {
      handleNoteSave();
    }
    handleClose(e);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const handleContentChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ): void => {
    setCurrentNote({ ...currentNote, content: e.target.value });
  };

  const handleImportanceChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCurrentNote({ ...currentNote, important: e.target.checked });
  };

  const modalSaveButton: ModalActionButton = {
    position: 1,
    text: isExistingNote ? "Update" : "Save",
    clickEvent: handleSaveButton,
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
            value={currentNote.title}
            onChange={handleTitleChange}
          />
        </div>
        <div className="note-input-area note__textarea">
          <h6>Content</h6>
          <textarea
            value={currentNote.content}
            onChange={handleContentChange}
          />
        </div>
        <div className="note-input-area note__important-checkbox">
          <input
            type="checkbox"
            checked={currentNote.important}
            onChange={handleImportanceChange}
          />
          <h6>Important</h6>
        </div>
      </div>
    </Modal>
  );
};

export default NoteForm;
