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
  const TextInput = ({ inputTitle }: { inputTitle: string }) => {
    return (
      <div className="modal__text-input">
        <h6>{inputTitle}</h6>
        <input type="text" />
      </div>
    );
  };

  return (
    <Modal
      modalTitle="Add new note"
      isOpen={modalVisibility}
      handleClose={handleClose}
    >
      <div className="noteForm">
        <TextInput inputTitle="Title" />
        <TextInput inputTitle="Content" />
      </div>
    </Modal>
  );
};

export default NoteForm;
