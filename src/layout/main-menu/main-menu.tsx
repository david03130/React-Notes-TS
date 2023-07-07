import "./main-menu.css";

import { SmallButton } from "../../components/common/small-button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Modal } from "../../components/common/modal";

const MainMenu = (): JSX.Element => {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const buttonHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showModal();
  };

  return (
    <div className="main-menu">
      <h1>Notes</h1>
      <SmallButton icon={faAdd} clickEvent={buttonHandler} />
      <Modal
        children={<p>Hello world!</p>}
        isOpen={visibleModal}
        handleClose={hideModal}
      />
    </div>
  );
};

export default MainMenu;
