import "./home.css";

import React, { useEffect, useState } from "react";
import NoteCalls from "../../services/note-calls";
import { Notes } from "../../components/notes";
import { MainMenu } from "../../layout/main-menu";
import { type Note } from "../../components/note";

const Home = (): JSX.Element => {
  const [notes, setNotes] = useState<Note[]>([]);

  const getNotes = () => {
    NoteCalls.getAll().then((response) => {
      console.log("Promise fulfilled.");
      setNotes(response);
    });
  };

  useEffect(getNotes, []);

  return (
    <div className="home">
      <MainMenu />
      <Notes notes={notes} />
    </div>
  );
};

export default Home;
