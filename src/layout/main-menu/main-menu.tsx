import "./main-menu.css";

import { SmallButton } from "../../components/common/small-button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NoteForm } from "../../components/note-form";

const MainMenu = (): JSX.Element => {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const openNoteFormHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showModal();
  };

  const closeNoteFormHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    hideModal();
  };

  return (
    <div className="main-menu">
      <h1>Notes</h1>
      <SmallButton icon={faAdd} clickEvent={openNoteFormHandler} />
      <NoteForm
        modalVisibility={visibleModal}
        handleClose={closeNoteFormHandler}
      />
    </div>
  );
};

export default MainMenu;
