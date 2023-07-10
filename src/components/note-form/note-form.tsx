import "./note-form.css";
import { Modal } from "../common/modal";

interface NoteFormProps {
  modalVisibility: boolean;
  handleClose: () => void;
}

const NoteForm = ({
  modalVisibility,
  handleClose,
}: NoteFormProps): JSX.Element => {
  return (
    <Modal
      modalTitle="Add new note"
      isOpen={modalVisibility}
      handleClose={handleClose}
    >
      <div className="noteForm">
        <p>Title</p>
        <input type="text" />
        <p>Content</p>
        <input type="text" />
      </div>
    </Modal>
  );
};

export default NoteForm;
