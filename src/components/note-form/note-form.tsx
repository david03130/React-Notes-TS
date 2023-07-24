import "./note-form.css";
import { Modal } from "../common/modal";
import { useEffect, useState } from "react";
import { Note } from "../note";
import NoteCalls from "../../services/note-calls";
import { ModalActionButton } from "../common/modal";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { fetchNotes } from "../../store/reducers/notes-slice";

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
  const dispatch = useAppDispatch();
  // console.log("Render component");

  useEffect(() => {
    setCurrentNote(noteData ?? defaultNote);
    // console.log("useEffect execution")
  }, [noteData]);

  const handleNoteUpdate = () => {
    return NoteCalls.update(currentNote);
  };

  const handleNoteSave = () => {
    return NoteCalls.create(currentNote);
  };

  const handleSaveButton = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (isExistingNote) {
      handleNoteUpdate()
        .then(() => {
          console.log("Note updated!");
          dispatch(fetchNotes());
          handleClose(e);
        })
        .catch((reason) => {
          throw new Error(reason);
        });
    } else {
      handleNoteSave()
        .then(() => {
          console.log("Note saved!");
          dispatch(fetchNotes());
          handleClose(e);
        })
        .catch(() => {
          throw new Error("Error when saving note.");
        });
    }
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
