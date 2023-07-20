import "./main-menu.css";

import { SmallButton } from "../../components/common/small-button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../../hooks/reduxHooks";
import { showNoteForm } from "../../store/reducers/note-form-slice";

const MainMenu = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const openNoteFormModal = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault();
    dispatch(showNoteForm());
  };

  return (
    <div className="main-menu">
      <h1>Notes</h1>
      <SmallButton icon={faAdd} clickEvent={openNoteFormModal} />
    </div>
  );
};

export default MainMenu;
