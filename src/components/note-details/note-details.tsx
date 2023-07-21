import "./note-details.css";

import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
import { Modal, ModalActionButton } from "../common/modal";
import Note from "../note/note";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { hideNoteDetails } from "../../store/reducers/note-details-slice";
import { showNoteForm } from "../../store/reducers/note-form-slice";

interface NoteDetailsProps {
  note: Note | undefined;
  modalVisibility: boolean;
  handleClose: React.MouseEventHandler;
}

const defaultNote: Note = {
  id: 0,
  title: "",
  content: "",
  important: false,
};

const NoteDetails = ({
  note = defaultNote,
  modalVisibility,
  handleClose,
}: NoteDetailsProps) => {
  let extraIconsArray: FontAwesomeIconProps[] = [];
  const dispatch = useAppDispatch();

  const modalEditButton: ModalActionButton = {
    text: "Edit",
    clickEvent: (e) => {
      e.preventDefault();
      dispatch(hideNoteDetails());
      dispatch(showNoteForm(note));
    },
    position: 0,
  };

  if (note.important) {
    const importantIcon: FontAwesomeIconProps = {
      icon: faExclamation,
      className: "modal__important-note",
    };
    extraIconsArray.push(importantIcon);
  }

  return (
    <Modal
      modalTitle={note.title}
      isOpen={modalVisibility}
      handleClose={handleClose}
      extraIcons={extraIconsArray}
      modalButtons={[modalEditButton]}
    >
      <p>{note.content}</p>
    </Modal>
  );
};

export default NoteDetails;
