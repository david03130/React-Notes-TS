import "./main-menu.css";

import { SmallButton } from "../../components/common/small-button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NoteForm } from "../../components/note-form";

const MainMenu = (): JSX.Element => {
  const [visibleModal, setVisibleModal] = useState(false);
  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const closeButtonHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    showModal();
  };

  const closeNoteForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    hideModal();
  };

  const handleNoteSave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Save note!");
  };

  return (
    <div className="main-menu">
      <h1>Notes</h1>
      <SmallButton icon={faAdd} clickEvent={closeButtonHandler} />
      <NoteForm
        modalVisibility={visibleModal}
        handleClose={closeNoteForm}
        handleSave={handleNoteSave}
      />
    </div>
  );
};

export default MainMenu;
