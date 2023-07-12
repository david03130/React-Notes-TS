import "./note-details.css";

import { faExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";
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
  let extraIconsArray: FontAwesomeIconProps[] = [];

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
    >
      <p>{note.content}</p>
    </Modal>
  );
};

export default NoteDetails;
