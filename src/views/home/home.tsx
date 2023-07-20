import "./home.css";

import { Notes } from "../../components/notes";
import { MainMenu } from "../../layout/main-menu";
import { ModalsPortal } from "../../components/modals-portal";

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <MainMenu />
      <Notes />
      <ModalsPortal />
    </div>
  );
};

export default Home;
