import "./home.css";

import React from "react";
import { Notes } from "../../components/Notes";
import { MainMenu } from "../../layout/MainMenu";

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <MainMenu />
      <Notes />
    </div>
  );
};

export default Home;
