import "./main-menu.css";

import { SmallButton } from "../../components/common/small-button";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const MainMenu = (): JSX.Element => {
  const buttonHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Click!");
  };

  return (
    <div className="main-menu">
      <h1>Notes</h1>
      <SmallButton icon={faAdd} clickEvent={buttonHandler} />
    </div>
  );
};

export default MainMenu;
