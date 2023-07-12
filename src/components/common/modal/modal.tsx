import "./modal.css";
import { ReactPortal } from "../react-portal";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { SmallButton } from "../small-button";
import { Button } from "../button";
import { ModalButton } from "./";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

interface ModalProps {
  children: React.ReactNode;
  modalTitle: string;
  isOpen: boolean;
  modalButtons?: ModalButton[];
  extraIcons?: FontAwesomeIconProps[];
  handleClose: React.MouseEventHandler;
}

const Modal = ({
  children,
  modalTitle,
  isOpen,
  modalButtons,
  handleClose,
  extraIcons,
}: ModalProps): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  const modalButtonSortAsc = (a: ModalButton, b: ModalButton) => {
    return a.position - b.position;
  };

  const ModalBody = (
    <div className="modal">
      <div className="modal__body">
        <div className="modal__header">
          <div className="modal__header__left-section">
            <h3>{modalTitle}</h3>
            {extraIcons ? (
              <div className="modal__header__left-section__icons">
                {extraIcons.map((icon) => (
                  <FontAwesomeIcon
                    icon={icon.icon}
                    className={icon.className}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <SmallButton
            icon={faClose}
            transparent={true}
            iconSize={"xs"}
            clickEvent={handleClose}
          />
        </div>
        <div className="modal__content">{children}</div>
        {modalButtons ? <hr className="modal__separator" /> : ""}
        <div className="modal__footer">
          {modalButtons?.sort(modalButtonSortAsc).map((button) => (
            <Button
              key={crypto.randomUUID()}
              text={button.text}
              clickEvent={button.clickEvent}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return <ReactPortal wrapperId="portal-root">{ModalBody}</ReactPortal>;
};

export default Modal;
