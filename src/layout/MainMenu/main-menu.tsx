import "./main-menu.css";

import { SmallButton } from "../../components/common/SmallButton";

const MainMenu = (): JSX.Element => {
  const buttonHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    console.log("Click!");
  }

  return (
    <div className="main-menu">
      <h1>Notes</h1>
      <SmallButton clickEvent={buttonHandler}/>
    </div>
  );
};

export default MainMenu;
