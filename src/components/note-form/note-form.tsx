import "./note-form.css";
import { Modal } from "../common/modal";

interface NoteFormProps {
  modalVisibility: boolean;
  handleClose: React.MouseEventHandler;
}

const NoteForm = ({
  modalVisibility,
  handleClose,
}: NoteFormProps): JSX.Element => {
  const handleNoteSave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Save note!");
    // handleClose(e);
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
          <input type="text" />
        </div>
        <div className="note-input-area note__textarea">
          <h6>Content</h6>
          <textarea></textarea>
        </div>
      </div>
    </Modal>
  );
};

export default NoteForm;
