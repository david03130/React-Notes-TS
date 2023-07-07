import "./modal.css";
import { ReactPortal } from "../react-portal";

interface ModalProps {
  children: JSX.Element;
  isOpen: boolean;
  handleClose: () => void;
}

const Modal = ({
  children,
  isOpen,
  handleClose,
}: ModalProps): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  return (
    <ReactPortal wrapperId="portal-root">
      <div className="modal">
        <a
          className="modal__closeButton"
          href=""
          onClick={(e) => {
            e.preventDefault();
            handleClose();
          }}
        >Close</a>
        <div className="modal__content">{children}</div>
      </div>
    </ReactPortal>
  );
};

export default Modal;
