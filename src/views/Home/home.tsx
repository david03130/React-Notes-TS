import "./home.css";

import React from "react";
import { Notes } from "../../components/Notes";

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <h1>Notes</h1>
      <Notes />
    </div>
  );
};

export default Home;
