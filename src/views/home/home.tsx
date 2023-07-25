import "./home.css";

import { Notes } from "../../components/notes";
import { MainMenu } from "../../layout/main-menu";
import { ModalsPortal } from "../../components/modals-portal";
import NotesDropdown from "../../components/notes-dropdown";

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <MainMenu />
      <NotesDropdown />
      <Notes />
      <ModalsPortal />
    </div>
  );
};

export default Home;
