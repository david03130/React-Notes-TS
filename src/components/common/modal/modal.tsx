import "./modal.css";
import { ReactPortal } from "../react-portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { SmallButton } from "../small-button";

interface ModalProps {
  children: React.ReactNode;
  modalTitle: string;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({
  children,
  modalTitle,
  isOpen,
  handleClose,
}: ModalProps): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  const closeModalHandler = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    handleClose();
  };

  const ModalBody = (
    <div className="modal">
      <div className="modal__body">
        <div className="modal__header">
          <div>
            <h3>{modalTitle}</h3>
            <SmallButton
              icon={faClose}
              transparent={true}
              iconSize={"xs"}
              clickEvent={closeModalHandler}
            />
          </div>
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );

  return <ReactPortal wrapperId="portal-root">{ModalBody}</ReactPortal>;
};

export default Modal;
