import "./modal.css";
import { ReactPortal } from "../react-portal";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { SmallButton } from "../small-button";
import { Button } from "../button";

interface ModalProps {
  children: React.ReactNode;
  modalTitle: string;
  isOpen: boolean;
  handleClose: React.MouseEventHandler;
  handleSave: React.MouseEventHandler;
}

const Modal = ({
  children,
  modalTitle,
  isOpen,
  handleClose,
  handleSave,
}: ModalProps): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

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
              clickEvent={handleClose}
            />
          </div>
        </div>
        <div className="modal__content">{children}</div>
        <hr className="modal__separator" />
        <div className="modal__footer">
          <Button text="Save" clickEvent={handleSave} />
        </div>
      </div>
    </div>
  );

  return <ReactPortal wrapperId="portal-root">{ModalBody}</ReactPortal>;
};

export default Modal;
