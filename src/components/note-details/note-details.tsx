import { Modal } from "../common/modal";
import Note from "../note/note";

interface NoteDetailsProps {
  note: Note;
  modalVisibility: boolean;
  handleClose: React.MouseEventHandler;
}

const NoteDetails = ({
  note,
  modalVisibility,
  handleClose,
}: NoteDetailsProps) => {
  return (
    <Modal
      modalTitle={note.title}
      isOpen={modalVisibility}
      handleClose={handleClose}
    >
      <p>{note.content}</p>
    </Modal>
  );
};

export default NoteDetails;
