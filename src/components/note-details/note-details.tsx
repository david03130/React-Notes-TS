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
      modalTitle="Details"
      isOpen={modalVisibility}
      handleClose={handleClose}
      // TODO: Realmente aquí no hay que guardar nada.
      // TODO: Mirar manera de definir los botones del Modal.
      handleSave={() => {}}
    >
      <p>{note.title}</p>
    </Modal>
  );
};

export default NoteDetails;
