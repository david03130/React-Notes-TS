import "./modal.css";
import { ReactPortal } from "../react-portal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, IconDefinition } from "@fortawesome/free-solid-svg-icons";

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

  const ModalBody = (
    <div className="modal" onClick={handleClose}>
      <div className="modal__body">
        <div className="modal__header">
          <div>
            <h3>{modalTitle}</h3>
            <a
              className="modal__closeButton"
              href=""
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              <FontAwesomeIcon icon={faClose} />
            </a>
          </div>
          <hr />
        </div>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  );

  return <ReactPortal wrapperId="portal-root">{ModalBody}</ReactPortal>;
};

export default Modal;
