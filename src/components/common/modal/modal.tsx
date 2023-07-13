import "./modal.css";
import { ReactPortal } from "../react-portal";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { SmallButton } from "../small-button";
import { Button } from "../button";
import { ModalActionButton } from "./";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { ModalSmallButton } from "./";

interface ModalProps {
  children: React.ReactNode;
  modalTitle: string;
  isOpen: boolean;
  modalButtons?: ModalActionButton[];
  extraIcons?: FontAwesomeIconProps[];
  extraSmallButtons?: ModalSmallButton[];
  handleClose: React.MouseEventHandler;
}

const Modal = ({
  children,
  modalTitle,
  isOpen,
  modalButtons,
  handleClose,
  extraIcons,
  extraSmallButtons,
}: ModalProps): JSX.Element | null => {
  if (!isOpen) {
    return null;
  }

  const buttonsSortAsc = <T extends { position: number }>(a: T, b: T) => {
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
                    key={crypto.randomUUID()}
                  />
                ))}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="modal__header__right-section">
            {extraSmallButtons
              ? extraSmallButtons
                  .sort(buttonsSortAsc)
                  .map((smallButton) => (
                    <SmallButton
                      icon={smallButton.icon}
                      clickEvent={smallButton.clickEvent}
                      transparent={smallButton.transparent}
                      className={smallButton.className}
                      iconSize={smallButton.iconSize}
                      key={crypto.randomUUID()}
                    />
                  ))
              : ""}
            <SmallButton
              icon={faClose}
              transparent={true}
              iconSize={"xs"}
              clickEvent={handleClose}
            />
          </div>
        </div>
        <div className="modal__content">{children}</div>
        {modalButtons ? <hr className="modal__separator" /> : ""}
        <div className="modal__footer">
          {modalButtons?.sort(buttonsSortAsc).map((button) => (
            <Button
              text={button.text}
              clickEvent={button.clickEvent}
              key={crypto.randomUUID()}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return <ReactPortal wrapperId="portal-root">{ModalBody}</ReactPortal>;
};

export default Modal;
