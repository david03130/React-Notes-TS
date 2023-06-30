import "./home.css";

import React from "react";
import { Notes } from "../../components/Notes";
import { MainMenu } from "../../layout/MainMenu";
import { type Note } from "../../components/Note";

const notes: Note[] = [
  {
    title: "My first note!",
    content: "This is my very first note in my new notes application!",
    important: false,
  },
  {
    title: "TypeScript is great",
    content:
      "I've been learning TypeScript for the past month and I really like it! I'm excited to keep making more projects with it.",
    important: false,
  },
];

const Home = (): JSX.Element => {
  return (
    <div className="home">
      <MainMenu />
      <Notes notes={notes} />
    </div>
  );
};

export default Home;
